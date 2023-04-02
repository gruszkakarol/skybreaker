export const ROUTES = {
  MISSION_PLANNING: () => `/mission-planning`,
  FLIGHT_CONTROL: (missionId: string) => `/flight-control/${missionId}`,
  MISSIONS: () => `/missions`,
};
