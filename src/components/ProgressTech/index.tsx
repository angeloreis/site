import { Flex, Heading, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

interface ProgressTechProps {
    techName: string
    valueOfProgress: number
    colorProgress: string
    isMobile?: boolean
}

export function ProgressTech({ techName, valueOfProgress, colorProgress = 'orange.500', isMobile }: ProgressTechProps) {
    return (
        <Flex flexDirection="column" alignItems="center" justify={"center"} borderRadius="7px" background="blackAlpha.500" padding="6px" color="white">
            <CircularProgress value={valueOfProgress} color={colorProgress} size={isMobile ? "74px" : "98px"} thickness='4px' >
                <CircularProgressLabel>{valueOfProgress.toString().concat('%')}</CircularProgressLabel>
            </CircularProgress>
            <Heading size={isMobile ? "xs" : "sm"}>{techName}</Heading>
        </Flex>
    )
}