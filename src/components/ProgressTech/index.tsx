import { Flex, Heading, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

interface ProgressTechProps {
    techName: string
    valueOfProgress: number
    colorProgress: string
}

export function ProgressTech({techName, valueOfProgress, colorProgress = 'orange.500'}: ProgressTechProps) {
    return (<Flex flexDirection="column" alignItems="center">
        <Heading size="sm">{techName}</Heading>
        <CircularProgress value={valueOfProgress} color={colorProgress} size="124px" thickness='4px' >
            <CircularProgressLabel>{valueOfProgress.toString().concat('%')}</CircularProgressLabel>
        </CircularProgress>
    </Flex>)
}