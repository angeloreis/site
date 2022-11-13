import {
    Button,
    Flex,
    Heading,
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
    useMediaQuery } from "@chakra-ui/react";
import { AboutMeDataProps, TechDataProps } from "../../../types/api";
import { getColorStack } from "../../../util/functions";
import { ProgressTech } from "../../ProgressTech";

interface AboutMeTechProps {
    aboutMe: AboutMeDataProps
    tech: TechDataProps
}

export function SectionAboutMe({ aboutMe, tech }: AboutMeTechProps) {
    const [isMobile] = useMediaQuery('(max-width: 768px)');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { photo, title, description } = aboutMe
    return (
        <Flex
            id="quemsou"
            width="100%"
            flexDirection="row"
            alignItems="center"
            justify="center"
            paddingY="15px">
            <Flex
                alignItems="center"
                justify="center"
                minW="318px"
                w={["319px", "450px"]}
                paddingX="10px">
                <Image
                    src={photo.url}
                    width="256px"
                    height="256px"
                    alt="Foto de perfil do Angelo Reis via Github"
                    borderRadius="100%"
                    marginY="35px" />
            </Flex>
            <Flex
                flexDir="column"
                align={["center", "flex-start"]}
                justify="center"
                minW="318px" w={["319px", "450px"]}
                paddingX="10px">
                <Heading paddingY="24px">{title}</Heading>
                <Text dangerouslySetInnerHTML={{ __html: description.html }} />

                <Button onClick={onOpen} width="100%" bg="purple.500" _hover={{ bg: "purple.600" }} my="15px">Minha Stack</Button>

                <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={true}>
                    <ModalOverlay />
                    <ModalContent background={"purple.500"}>
                        <ModalHeader />
                        <ModalCloseButton color="white" fontSize="1.8rem"/>
                        <ModalBody>
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
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Flex>
        </Flex>
    )
}