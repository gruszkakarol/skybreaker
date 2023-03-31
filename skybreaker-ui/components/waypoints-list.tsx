import { Box, Card, CardBody, CardFooter, CardHeader, Heading, IconButton, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';
import { DeleteIcon } from "@chakra-ui/icons";
import { MissionWaypoint } from "../domain/domain";
import { useMissionPlanningStore } from "../store/mission-planning";

export type WaypointsListProps = {
    waypoints: MissionWaypoint[]
};

export const WaypointsList: React.FC<WaypointsListProps> = ({ waypoints }) => {
    const { t } = useTranslation();

    const { removeWaypoint } = useMissionPlanningStore();

    return (
        <VStack height="100%" spacing={4}>
            {waypoints.map(({ position, type }) => {
                return (
                    <Card bgColor="gray.600" color="gray.100" key={`${position[0]}${position[1]}`} spac width="100%">
                        <CardHeader>
                            <Heading size="xs" textTransform="uppercase">
                                {t(`mission-action-type.${type}`)}
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing={1}>
                                <Box>
                                    <Heading size="xs">
                                        {t("latitude")}:
                                    </Heading>
                                    <Text>
                                        {position[0]}
                                    </Text>
                                </Box>
                                <Box>
                                    <Heading size="xs">
                                        {t("longitude")}:
                                    </Heading>
                                    <Text>
                                        {position[1]}
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <IconButton
                                aria-label={t("remove-waypoint")}
                                colorScheme="red"
                                icon={<DeleteIcon />}>
                                {t("remove")}
                            </IconButton>
                        </CardFooter>
                    </Card>
                )
            })}
        </VStack >
    )
} 