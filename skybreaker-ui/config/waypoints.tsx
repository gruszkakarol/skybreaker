import { MissionActionEnum } from "../domain/domain";

export const MISSION_TAKE_OFF_SETTINGS = {
  mapCircleOpacity: 0.8,
  mapCircleRadius: 20,
  mapCircleColor: "green",
  bgColor: "green.300",
};

export const MISSION_MOVE_SETTINGS = {
  mapCircleOpacity: 0.8,
  mapCircleRadius: 15,
  mapCircleColor: "blue",
  bgColor: "blue.300",
};

export const MISSION_LAND_SETTINGS = {
  mapCircleOpacity: 0.8,
  mapCircleRadius: 20,
  mapCircleColor: "orange",
  bgColor: "orange.300",
};

export const MISSION_ACTION_SETTINGS = {
  [MissionActionEnum.TakeOff]: MISSION_TAKE_OFF_SETTINGS,
  [MissionActionEnum.Move]: MISSION_MOVE_SETTINGS,
  [MissionActionEnum.Land]: MISSION_LAND_SETTINGS,
};

