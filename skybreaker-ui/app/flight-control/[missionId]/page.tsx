'use client';

import { Box, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Navigation } from "../../../components/navigation";
import { ROUTES } from "../../../config/routes";

function FlightControl() {
    const router = useRouter();
    console.log(router);

    return (
        <VStack>
            <Navigation activeRoute={ROUTES.FLIGHT_CONTROL("")} />
            <Box>
                ds
            </Box>
        </VStack>
    )
}

export default FlightControl;