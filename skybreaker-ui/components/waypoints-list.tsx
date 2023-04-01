import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Heading, IconButton, Input, Select, VStack } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';
import { DeleteIcon } from "@chakra-ui/icons";
import { MissionWaypoint } from "../domain/domain";
import { useMissionPlanningStore } from "../store/mission-planning";
import { MISSION_ACTION_SETTINGS } from "../config/waypoints";
import { MissionActionEnum } from "../domain/domain";

export type WaypointsListProps = {
    waypoints: MissionWaypoint[]
};

const ActionsOptions = () => {
    const { t } = useTranslation();

    return (<>{Object.values(MissionActionEnum).map((action) => <option key={action} value={action}>{t(`mission-action.type.${action}`)}</option>)}</>)
};

export const WaypointsList: React.FC<WaypointsListProps> = ({ waypoints }) => {
    const { t } = useTranslation();

    const { removeWaypoint } = useMissionPlanningStore();

    return (
        <Accordion allowMultiple>
            {waypoints.map((waypoint) => {
                const { position, type } = waypoint;
                const { icon, bgColor } = MISSION_ACTION_SETTINGS[type];
                const [latitude, longitude] = position;

                return (
                    <AccordionItem alignItems="stretch" border="none" display="flex" flexWrap="nowrap" key={`${position[0]}${position[1]}${type}`}>
                        <Box bgColor={bgColor} fontSize="xl" width="4" />
                        <Box borderBottom="1px solid" borderColor="gray.300" flex="1">
                            <HStack>
                                <AccordionButton>
                                    <Heading flex="1" size="s" textAlign="left">
                                        {t(`mission-action.type.${type}`)}
                                    </Heading>
                                    <AccordionIcon />
                                </AccordionButton>
                            </HStack>
                            <AccordionPanel>
                                <VStack alignItems="stretch">
                                    <VStack>
                                        <Heading size="xs" width="100%">{t("latitude")}</Heading>
                                        <Input defaultValue={latitude} variant="flushed" />
                                    </VStack>
                                    <VStack>
                                        <Heading size="xs" width="100%">{t("longitude")}</Heading>
                                        <Input defaultValue={longitude} variant="flushed" />
                                    </VStack>
                                    <HStack>
                                        <Select defaultValue={type} variant="flushed" >
                                            <ActionsOptions />
                                        </Select>
                                        <IconButton aria-label={t("delete")} colorScheme="red" icon={<DeleteIcon />} onClick={() => removeWaypoint(waypoint)} />
                                    </HStack>
                                </VStack>
                            </AccordionPanel>
                        </Box>
                    </AccordionItem>
                )
            })}
        </Accordion >
    )
} 