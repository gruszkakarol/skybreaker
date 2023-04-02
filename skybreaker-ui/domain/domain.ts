import { GeoPosition } from "./position";

export enum MissionActionEnum {
  TakeOff = "take-off",
  Move = "move",
  Land = "land",
}

export type MissionStart = {
  type: MissionActionEnum.TakeOff;
};

export type MissionMove = {
  type: MissionActionEnum.Move;
};

export type MissionLand = {
  type: MissionActionEnum.Land;
};

export type MissionAction = MissionStart | MissionMove | MissionLand;

export type MissionWaypoint = MissionAction & {
  position: GeoPosition;
};

export type Mission = {
  waypoints: MissionWaypoint[];
  id: string;
  name: string;
};
