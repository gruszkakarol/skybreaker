import dynamic from "next/dynamic";
import { MissionWaypoint } from "../../domain/domain";

const Polyline = dynamic(() => import("react-leaflet").then((mod) => mod.Polyline), { ssr: false });

export type WaypointsPathProps = {
    waypoints: MissionWaypoint[];
}

export const WaypointsPath: React.FC<WaypointsPathProps> = ({ waypoints }) => {

    return (
        <Polyline positions={waypoints.map(waypoint => waypoint.position)} />
    )
};