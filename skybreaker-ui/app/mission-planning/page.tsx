'use client';

import {
  Box, HStack,
} from '@chakra-ui/react';
import { Menu } from './menu';
import { MissionCreator } from './mission-creator';
import { Map } from '@/components/map';
import { useGeoLocation } from '@/utils/hooks';

function MissionPlanning() {
  const userLocation = useGeoLocation();

  return (
    <HStack
      height="100vh"
      spacing={0}
      width="100vw"
    >
      <Box height="100%" minWidth="25%">
        <Menu />
      </Box>
      <Box>
        <Map startingPosition={userLocation}>
          <MissionCreator />
        </Map>
      </Box>
    </HStack>
  );
}

export default MissionPlanning;
