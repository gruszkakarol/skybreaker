'use client';

import {
  Box, HStack, VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { WaypointsPath } from '../../components/map/waypoints-path';
import { Navigation } from '../../components/navigation';
import { ROUTES } from '../../config/routes';
import { MissionCreator } from './mission-creator';
import { StartMissionDialog } from './save-mission';
import { useMissionPlanningStore } from '@/store/mission-planning';
import { WaypointsList } from '@/components/waypoints-list';
import { Map } from '@/components/map';
import { useGeoLocation } from '@/utils/hooks';

function MissionPlanning() {
  const userLocation = useGeoLocation();
  const { waypoints, saveMission, saveMissionAndStart, selectedMission } = useMissionPlanningStore();
  const router = useRouter();

  const hasWaypoints = waypoints.length > 0;

  const mission = {
    waypoints, name: "test flight", id: "1"
  }

  const handleMissionSave = () => {
    saveMission(mission);
  };

  const handleMissionSaveAndStart = () => {
    saveMissionAndStart(mission).then(() => {
      if (selectedMission) {
        router.push(ROUTES.FLIGHT_CONTROL(selectedMission.id));
      }
    });
  };

  return (
    <VStack boxSizing="border-box" height="100vh"
      overflowY="hidden" spacing={0}
    >
      <Navigation activeRoute={ROUTES.MISSION_PLANNING()} />
      <HStack
        align="stretch"
        spacing={0}
        width="100%"
      >
        <HStack align="start" alignContent="flex-start" flexGrow={1} wrap="wrap">
          <Box maxHeight="80%" overflowY="auto" width="100%">
            <WaypointsList waypoints={waypoints} />
          </Box>
          <HStack align="start" height="20%" justifyContent="flex-end" width="100%">
            {hasWaypoints && <StartMissionDialog onSave={handleMissionSave} onSaveAndStart={handleMissionSaveAndStart} />}
          </HStack>
        </HStack>
        <Box>
          <Map startingPosition={userLocation}>
            <MissionCreator />
            <WaypointsPath waypoints={waypoints} />
          </Map>
        </Box>
      </HStack>
    </VStack>

  );
}

export default MissionPlanning;
