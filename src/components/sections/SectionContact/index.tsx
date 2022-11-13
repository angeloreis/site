import { Flex, Heading, Button, Text } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaDribbble, FaBehance, FaWhatsapp, FaAt, FaInstagram, FaYoutube, FaVimeo } from "react-icons/fa"
import { ContactsDataProps, HeaderDataProps } from "../../../types/api"

interface SectionContactProps {
    header: HeaderDataProps
    contactMe: ContactsDataProps
}

const socialIcon = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    dribbble: <FaDribbble />,
    behance: <FaBehance />,
    whatsapp: <FaWhatsapp />,
    email: <FaAt />,
    instagram: <FaInstagram />,
    youtube: <FaYoutube />,
    vimeo: <FaVimeo />
}

export const SectionContact = ({ header, contactMe }: SectionContactProps) => {
    return (
        <Flex
            id="contato"
            h="450px"
            w='100%'
            flexDirection="column"
            alignItems="center"
            justify="center">
            <Heading paddingY="24px">Contato</Heading>
            {header.openToWork ? (
                <Flex
                    minW="319px"
                    maxW="650px"
                    w="100%"
                    flexDir="column"
                    paddingX='15px'
                    gap='10px'>
                    {
                        contactMe && contactMe.contacts.map(({ socialUrl, usernameSocial, type }) =>
                            <Button
                                key={socialUrl}
                                size="md"
                                leftIcon={socialIcon[type]}
                                background="purple.500"
                                _hover={{
                                    background: "purple.700",
                                    border: "5px",
                                    borderColor: "purple.900"
                                }}>
                                <a href={type !== 'email' ? socialUrl : `mailto:${socialUrl}`}
                                    target="_blank"
                                    rel="noreferrer">
                                    {usernameSocial}
                                </a>
                            </Button>
                        )
                    }
                </Flex>
            ) : (
                <>
                    <Flex
                        flexDirection="column"
                        alignItems="center"
                        justify="center"
                        padding="15px">
                        <Heading size={"lg"}>No momento estou indisponível para contratações e serviços</Heading>
                    </Flex>
                    <Flex
                        flexDirection="column"
                        alignItems="center"
                        justify="center"
                        padding="15px">
                        <Text>
                            Se quiser conversar, meus contatos estão abaixo:
                            <a href="mailto:angelo.desenvolvedor@gmail.com?subject=Seu site - Podemos conversar?"> angelo.desenvolvedor@gmail.com</a>
                        </Text>
                        <Text><a
                            href="https://api.whatsapp.com/send?phone=5591992664715&text=Ol%C3%A1%2C%20estou%20precisando%20de%20um%20desenvolvedor%20na%20minha%20empresa!%20Teria%20como%20voc%C3%AA%20d%C3%A1%20uma%20ajuda%3F"
                            target="_blank" rel="noreferrer">Clique aqui</a> para conversar direto no whatsapp
                        </Text>
                    </Flex>
                </>
            )}

        </Flex>
    )
}