import { HStack } from "@chakra-ui/react"
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { useTranslation } from "react-i18next"
import { ROUTES } from "../config/routes"

export type NavigationProps = {
    activeRoute?: string
}

export const Navigation: React.FC<NavigationProps> = ({ activeRoute }) => {
    const { t } = useTranslation();

    return <HStack bgColor="gray.600" color="white" justifyContent="flex-end" padding={4} width="100%">
        <Link as={NextLink} href={ROUTES.MISSION_PLANNING()} textDecoration={activeRoute === ROUTES.MISSION_PLANNING() ? "underline" : "unset"}>
            {t('navigation.mission-planning')}
        </Link>
        <Link as={NextLink} href={ROUTES.MISSIONS()} textDecoration={activeRoute === ROUTES.MISSIONS() ? "underline" : "unset"}>
            {t('navigation.flight-control')}
        </Link>
    </HStack>
}