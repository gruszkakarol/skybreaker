import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, HStack, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { useTranslation } from "react-i18next";

export type StartMissionDialogProps = {
    onSave: () => void;
    onSaveAndStart: () => void;
};

export const StartMissionDialog: React.FC<StartMissionDialogProps> = ({ onSave, onSaveAndStart }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef()
    const { t } = useTranslation();

    return (
        <Box>
            <HStack justifyContent="end" padding={4} width="100%">
                <Button colorScheme="blue" onClick={onOpen}>
                    {t("save-mission")}
                </Button>
            </HStack>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            {t("save-mission")}
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            {t("save-mission-description")}
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button onClick={onClose} ref={cancelRef}>
                                {t("cancel")}
                            </Button>
                            <Button colorScheme='blue' ml={3} onClick={onSave}>
                                {t("save")}
                            </Button>
                            <Button colorScheme="green" ml={3} onClick={onSaveAndStart}>
                                {t("save-and-start")}
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    )
}