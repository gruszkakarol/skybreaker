'use client';

import {
  Box, HStack,
} from '@chakra-ui/react';
import { WaypointsPath } from '../../components/map/waypoints-path';
import { MissionCreator } from './mission-creator';
import { useMissionPlanningStore } from '@/store/mission-planning';
import { WaypointsList } from '@/components/waypoints-list';
import { Map } from '@/components/map';
import { useGeoLocation } from '@/utils/hooks';

function MissionPlanning() {
  const userLocation = useGeoLocation();
  const waypoints = useMissionPlanningStore(state => state.waypoints);

  return (
    <HStack
      height="100vh"
      spacing={0}
      width="100vw"
    >
      <Box height="100%" maxHeight="100vh" minWidth="25%" overflowY="auto">
        <WaypointsList waypoints={waypoints} />
      </Box>
      <Box>
        <Map startingPosition={userLocation}>
          <MissionCreator />
          <WaypointsPath waypoints={waypoints} />
        </Map>
      </Box>
    </HStack>
  );
}

export default MissionPlanning;
