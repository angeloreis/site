import { Menu } from "../Menu"
import { Flex, Text } from '@chakra-ui/react'

export function Header() {
    return (
        <Flex as='header' flexDirection="row" alignItems="center" justifyContent="space-between" paddingX="30px" minH="97px" w="100%">
                    <Text fontSize={"2rem"} fontWeight="extrabold">ANGELO REIS</Text>
                    <Menu />    
        </Flex>
    )
}