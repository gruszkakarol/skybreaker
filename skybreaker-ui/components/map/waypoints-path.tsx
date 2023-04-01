import dynamic from "next/dynamic";
import { MissionWaypoint } from "../../domain/domain";
import { MISSION_ACTION_SETTINGS } from "../../config/waypoints";

const Polyline = dynamic(() => import("react-leaflet").then((mod) => mod.Polyline), { ssr: false });
const CircleMarker = dynamic(() => import("react-leaflet").then((mod) => mod.CircleMarker), { ssr: false });

export type WaypointsPathProps = {
    waypoints: MissionWaypoint[];
    onWaypointDrag?: (waypoint: MissionWaypoint) => void;
}

export const WaypointsPath: React.FC<WaypointsPathProps> = ({ waypoints }) => {
    const points = waypoints.map(w => w.position);

    return (
        <>
            <Polyline pathOptions={{ color: "gray" }} positions={points} />
            {waypoints.map((w) => {
                const { mapCircleColor, mapCircleOpacity, mapCircleRadius } = MISSION_ACTION_SETTINGS[w.type];
                const eventHandlers = {
                    dragend: () => {
                        console.log("dragend",);
                    },
                    dragstart: () => {
                        console.log("dragstart",);
                    },
                    drag: () => {
                        console.log("drag",);
                    },
                    click: () => {
                        console.log("click",);
                    },
                };

                return (<CircleMarker center={w.position} eventHandlers={eventHandlers} key={`${w.position[0]}${w.position[1]}${w.type}`} pathOptions={{ fillOpacity: mapCircleOpacity, color: mapCircleColor, fillColor: mapCircleColor }} radius={mapCircleRadius} />)
            })}
        </>
    )
};