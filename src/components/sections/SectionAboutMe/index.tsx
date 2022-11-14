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
    SimpleGrid,
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

const ModalBodyAboutMe = ({ description }: AboutMeDataProps) => {
    return <Text dangerouslySetInnerHTML={{ __html: description.html }} color="white" p="8px" />
}

const ModalBodyTech = ({ tech, isMobile }: ModalBodyTechProps) => {
    return (
        <SimpleGrid columns={[2, 4]} spacing={['12px', '4px']} paddingY="24px">
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
        </SimpleGrid>
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
            paddingY="15px">
            <Flex
                alignItems="center"
                justify="center"
                minW="318px"
                w={["319px", "450px"]}
                paddingX="10px"
                order={[1, 0]}>
                <Button onClick={() => handleModalBody(<ModalBodyAboutMe {...aboutMe} />)} width="100%" bg="purple.500" _hover={{ bg: "purple.600" }} my="15px" >{title}</Button>
            </Flex>
            <Flex
                alignItems="center"
                justify="center"
                minW="318px"
                w={["319px", "450px"]}
                paddingX="10px"
                order={[0, 1]}>
                <Image
                    src={photo.url}
                    width="256px"
                    height="256px"
                    alt="Foto de perfil do Angelo Reis via Hygraph"
                    borderRadius="100%"
                    marginY="35px" />
            </Flex>
            <Flex
                flexDir="column"
                align={["center", "flex-start"]}
                justify="center"
                minW="318px" w={["319px", "450px"]}
                paddingX="10px"
                order={2}>

                <Button onClick={() => handleModalBody(<ModalBodyTech tech={tech} isMobile={isMobile} />)} width="100%" bg="purple.500" _hover={{ bg: "purple.600" }} my="15px">Minha Stack</Button>

                <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={true}>
                    <ModalOverlay />
                    <ModalContent background={"purple.500"}>
                        <ModalHeader />
                        <ModalCloseButton color="white" fontSize="1.8rem" />
                        <ModalBody>
                            {modalBody}
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Flex>
        </Flex>
    )
}