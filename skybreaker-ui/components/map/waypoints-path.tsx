import dynamic from "next/dynamic";
import { MissionWaypoint } from "../../domain/domain";
import { MISSION_ACTION_SETTINGS } from "../../config/waypoints";

const Polyline = dynamic(() => import("react-leaflet").then((mod) => mod.Polyline), { ssr: false });
const CircleMarker = dynamic(() => import("react-leaflet").then((mod) => mod.CircleMarker), { ssr: false });

export type WaypointsPathProps = {
    waypoints: MissionWaypoint[];
}

export const WaypointsPath: React.FC<WaypointsPathProps> = ({ waypoints }) => {
    const points = waypoints.map(w => w.position);

    return (
        <>
            <Polyline positions={points} />
            {waypoints.map((w) => (<CircleMarker center={w.position} color={MISSION_ACTION_SETTINGS[w.type]["mapCircleColor"]} key={`${w.position[0]}${w.position[1]}${w.type}`} radius={20} />))}
        </>
    )
};