import { create } from "zustand";
import { MissionActionType, MissionWaypoint } from "../../domain/domain";
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
      const type =
        state.waypoints.length === 0
          ? MissionActionType.TakeOff
          : MissionActionType.Move;

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
