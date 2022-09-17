import { Button, Divider, Drawer, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link'
import {FaBars, FaWindowClose} from 'react-icons/fa'
interface MenuItemProps {
    label: string
    href: string
    target?: string
    rel?: string
    isMobile?: boolean
}

function MenuItem({label, href, target, rel, isMobile}: MenuItemProps) {
    return (
        <Flex
         as="li"
         paddingRight="10px"
         marginY={isMobile ? '10px' : '0px'}
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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isMobile] = useMediaQuery('(max-width: 768px)');
    return (
    <Flex as="nav" alignItems="center">
        {isMobile ? (
            <>
                <Button background='purple.300' onClick={onOpen}>{isOpen ? <FaWindowClose/> : <FaBars/>}</Button> 
                <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent background={'purple.700'} color="whiteAlpha.900">
                        <DrawerHeader>
                            <Flex align={'center'} justify={'space-between'}>
                                Menu de navegação
                                <Button background='purple.300' onClick={onClose}>{<FaWindowClose/>}</Button> 
                            </Flex>
                        </DrawerHeader>
                            
                            <Flex flexDirection='column' paddingX='25px'>
                                <MenuItem href='/' label='Home' isMobile/>
                                <MenuItem href="#quemsou" label='Quem Sou' isMobile/>
                                {/* <MenuItem href="#portifolio" label='PortFólio' isMobile/> */}
                                <MenuItem href="#contato" label='Contato' isMobile/>
                            </Flex>
                            <Flex align='center' justify='center'>
                                <MenuItem href="https://github.com/angeloreis" target="_blank" rel="noreferrer" label='Github' isMobile/>
                                <Divider orientation='vertical' paddingRight={'12px'}/>
                                <MenuItem href="https://linkedin.com/in/angelodosreis/" target="_blank" rel="noreferrer" label='Linkedin' isMobile/>                                          
                            </Flex>
                    </DrawerContent>
                </Drawer>

            </> ) : (<Flex as="ul" alignItems="center" justifyContent="center" listStyleType="none">
          <MenuItem href='/' label='Home'/>
          <MenuItem href="#quemsou" label='Quem Sou' />
          {/* <MenuItem href="#portifolio" label='PortFólio' /> */}
          <MenuItem href="#contato" label='Contato' />
          <MenuItem href="https://github.com/angeloreis" target="_blank" rel="noreferrer" label='Github' />
          <MenuItem href="https://linkedin.com/in/angelodosreis/" target="_blank" rel="noreferrer" label='Linkedin' />
        </Flex>)}
        
    </Flex>
    )
}