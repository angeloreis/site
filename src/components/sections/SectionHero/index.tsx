import { Flex, Heading } from "@chakra-ui/react"
import { HeaderDataProps } from "../../../types/api"

interface SectionHeroProps {
    isMobile: boolean
    header: HeaderDataProps
}

export const SectionHero = ({isMobile, header}: SectionHeroProps) => {
    return (
        <Flex
          h={isMobile ? '312px' : "650px"}
          width="100%"
          flexDirection="column"
          alignItems="center"
          justify="center"
        >
          <Heading size={isMobile ? 'md' : "4xl"}>{header.rolePosition}</Heading>
          <Heading size={isMobile ? 'md' : "lg"}>{header.openToWork ? 'FrontEnd - Aberto a propostas' : header.CompanyEmployed}</Heading>
        </Flex>
    )
}