import { Flex, Text } from "@chakra-ui/react"

export const SectionFooter = () => {
    const currentDate = new Date()
    return (
        <Flex
        as="footer"
        flexDirection="column"
        alignItems="center"
        justify="center"
        paddingY='35px'
        paddingX="10px"
        w="100%">
        <Text>Feito com ❤️ NextJS + Chakra-UI + graphCMS</Text>
        <Text>{`Angelo Reis - Todos os direitos reservados - 2009/${currentDate.getFullYear()}`}</Text>
      </Flex>
    )
}