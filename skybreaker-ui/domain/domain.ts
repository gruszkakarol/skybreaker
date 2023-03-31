import { GeoPosition } from "./position";

export enum MissionActionType {
  TakeOff = "take-off",
  Move = "move",
  Land = "land",
}

export type MissionStart = {
  type: MissionActionType.TakeOff;
};

export type MissionMove = {
  type: MissionActionType.Move;
};

export type MissionLand = {
  type: MissionActionType.Land;
};

export type MissionAction = MissionStart | MissionMove | MissionLand;

export type MissionWaypoint = MissionAction & {
  position: GeoPosition;
};

export type Mission = {
  waypoints: MissionWaypoint[];
};
