import { Menu } from "../Menu"
import Link from 'next/link'
import { Flex, Image } from '@chakra-ui/react'

export function Header() {
    return (
        <Flex as='header' flexDirection="row" alignItems="center" justifyContent="space-between" paddingX="30px" minH="97px" w="100%" background="purple.500">
            <div></div>
            <Menu />
        </Flex>
    )
}