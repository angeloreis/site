import { Menu } from "../Menu"
import Link from 'next/link'
import { Flex, Image } from '@chakra-ui/react'

export function Header() {
    return (
        <Flex as='header' flexDirection="row" alignItems="center" justifyContent="space-between" paddingX="30px" minH="97px" w="100%" background="purple.500">
            <div>
                <Link href="/">
                    <a>
                        <Image
                            src="https://github.com/angeloreis.png"
                            width="64px"
                            height="64px"
                            alt="Foto de perfil do Angelo Reis via Github"
                            borderRadius="100%" />
                    </a>
                </Link>
            </div>
            <Menu />
        </Flex>
    )
}