import {
    Button,
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
    useMediaQuery
} from "@chakra-ui/react";
import { useState } from "react";
import { AboutMeDataProps, TechDataProps } from "../../../types/api";
import { getColorStack } from "../../../util/functions";
import { ProgressTech } from "../../ProgressTech";

interface AboutMeTechProps {
    aboutMe: AboutMeDataProps
    tech: TechDataProps
}

interface ModalBodyTechProps {
    tech: TechDataProps
    isMobile: boolean
}

interface ButtonModalProps {
    handleModal: () => void
    text: string
}

const ButtonModal = ({ handleModal, text }: ButtonModalProps) => {
    return (
        <Button
            onClick={handleModal}
            width="100%"
            bg="purple.500"
            _hover={{
                bg: "purple.600",
                transform: 'translateY(-4px)',
                boxShadow: "lg"
            }}
            my="15px">
            {text}
        </Button>
    )
}

const ModalBodyAboutMe = ({ description }: AboutMeDataProps) => {
    return <Text dangerouslySetInnerHTML={{ __html: description.html }} color="white" px="1rem" py="2rem" />
}

const ModalBodyTech = ({ tech, isMobile }: ModalBodyTechProps) => {
    return (
        <Stack paddingY="24px">
            {
                tech && tech.stackKnowledges.map((stackItem, index) => (
                    <ProgressTech
                        key={index}
                        techName={stackItem.name}
                        valueOfProgress={stackItem.percentageKnowledge}
                        colorProgress={getColorStack(stackItem.percentageKnowledge)}
                        isMobile={isMobile} />
                ))
            }
        </Stack>
    )
}

export function SectionAboutMe({ aboutMe, tech }: AboutMeTechProps) {
    const [isMobile] = useMediaQuery('(max-width: 768px)');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { photo, title } = aboutMe

    const [modalBody, setModalBody] = useState<JSX.Element>(<ModalBodyAboutMe {...aboutMe} />)

    const handleModalBody = (jsxElement: JSX.Element) => {
        setModalBody(jsxElement)
        onOpen()
    }

    return (
        <Flex
            id="quemsou"
            width="100%"
            flexDirection={["column", "row"]}
            alignItems="center"
            justify="center"
            paddingY="6.4rem">
            <Flex
                alignItems="center"
                justify="center"
                minW="318px"
                w={["319px", "450px"]}
                h="full"
                paddingX="10px"
                order={[0,1]}
            >
                <Image
                    src={photo.url}
                    width="256px"
                    height="256px"
                    alt="Foto de perfil do Angelo Reis via Hygraph"
                    borderRadius="100%"
                    marginY="35px"
                    _hover={{
                       transform: 'scale(1.1)',
                       transition: 'transform 0.1s ease-in-out'
                    }}
                />
            </Flex>
            <Flex
                flexDir={"column"}
                alignItems="center"
                justify="center"
                w={['319px', '450px']}
                order={[0,1]}>
                <ButtonModal
                    handleModal={() => handleModalBody(<ModalBodyAboutMe {...aboutMe} />)}
                    text={title} />
                <ButtonModal
                    handleModal={() => handleModalBody(<ModalBodyTech tech={tech} isMobile={isMobile} />)}
                    text={'Minha Stack'} />
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={true}>
                <ModalOverlay />
                <ModalContent background={"purple.500"}>
                    <ModalHeader />
                    <ModalCloseButton color="white" fontSize="1.8rem" mx="5px" my="12px" />
                    <ModalBody>
                        {modalBody}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    )
}