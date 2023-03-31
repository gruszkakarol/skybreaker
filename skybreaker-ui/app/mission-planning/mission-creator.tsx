import { useMapEvent } from "react-leaflet"
import { useMissionPlanningStore } from "../../store/mission-planning";

export function MissionCreator() {

    const { addWaypoint } = useMissionPlanningStore(state => state);

    useMapEvent("click", (e) => {
        addWaypoint([e.latlng.lat, e.latlng.lng]);
    });

    return null
}