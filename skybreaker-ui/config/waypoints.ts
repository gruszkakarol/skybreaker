import { MissionActionEnum } from "../domain/domain";

export const MISSION_TAKE_OFF_SETTINGS = {
  mapCircleColor: "green",
};

export const MISSION_MOVE_SETTINGS = {
  mapCircleColor: "blue",
};

export const MISSION_LAND_SETTINGS = {
  mapCircleColor: "red",
};

export const MISSION_ACTION_SETTINGS = {
  [MissionActionEnum.TakeOff]: MISSION_TAKE_OFF_SETTINGS,
  [MissionActionEnum.Move]: MISSION_MOVE_SETTINGS,
  [MissionActionEnum.Land]: MISSION_LAND_SETTINGS,
};
