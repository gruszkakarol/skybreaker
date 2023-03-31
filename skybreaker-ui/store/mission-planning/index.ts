import { create } from "zustand";
import { MissionActionEnum, MissionWaypoint } from "../../domain/domain";
import { GeoPosition } from "../../domain/position";

export type MissionPlanningStore = {
  waypoints: MissionWaypoint[];
  addWaypoint: (position: GeoPosition) => void;
  removeWaypoint: (waypoint: MissionWaypoint) => void;
};

export const useMissionPlanningStore = create<MissionPlanningStore>((set) => ({
  waypoints: [],
  addWaypoint: (position) => {
    set((state) => {
      const last = state.waypoints[state.waypoints.length - 1] ?? null;

      const type =
        state.waypoints.length === 0
          ? MissionActionEnum.TakeOff
          : MissionActionEnum.Move;

      if (last && state.waypoints.length >= 2) {
        return {
          waypoints: [
            ...state.waypoints.slice(0, -1),
            { ...last, type: MissionActionEnum.Move },
            { position, type: MissionActionEnum.Land },
          ],
        };
      }

      return {
        waypoints: [...state.waypoints, { type, position }],
      };
    });
  },
  removeWaypoint: (waypoint) =>
    set((state) => ({
      waypoints: state.waypoints.filter((w) => w !== waypoint),
    })),
}));
