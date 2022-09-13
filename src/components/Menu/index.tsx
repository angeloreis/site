import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
interface MenuItemProps {
    label: string
    href: string
    target?: string
    rel?: string
}

function MenuItem({label, href, target, rel}: MenuItemProps) {
    return (
        <Flex
         as="li"
         paddingRight="10px"
         fontSize="md"
         color="gray.100" transition="color 0.2s"
         _hover={{
            fontWeight: 600,
            color: 'purple.900'
         }}>
            <Link href={href}><a target={target} rel={rel}>{label}</a></Link>
        </Flex>
    )
}

export function Menu() {
    return (
    <Flex as="nav" alignItems="center">
        <Flex as="ul" alignItems="center" justifyContent="center" listStyleType="none">
          <MenuItem href='/' label='Home'/>
          <MenuItem href="#quemsou" label='Quem Sou' />
          <MenuItem href="#portifolio" label='PortFólio' />
          <MenuItem href="#contato" label='Contato' />
          <MenuItem href="https://github.com/angeloreis" target="_blank" rel="noreferrer" label='Github' />
          <MenuItem href="https://linkedin.com/in/angelodosreis/" target="_blank" rel="noreferrer" label='Linkedin' />
        </Flex>
    </Flex>
    )
}