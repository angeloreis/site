import { Flex, Heading } from "@chakra-ui/react"
import { HeaderDataProps } from "../../../types/api"

interface SectionHeroProps {
  isMobile: boolean
  header: HeaderDataProps
}

export const SectionHero = ({ isMobile, header }: SectionHeroProps) => {
  return (
    <Flex
      h={isMobile ? '312px' : "650px"}
      width="100%"
      flexDirection="column"
      alignItems="center"
      justify="center"
    >
      <Heading
        size={isMobile ? '2xl' : "4xl"}

        bgGradient='linear(blue.50, purple.600)'
        bgClip='text'
      >
        {header.rolePosition}
      </Heading>
      <Heading size={isMobile ? 'md' : "lg"}>
        {header.openToWork ? 'FrontEnd - Aberto a propostas' : header.companyEmployed}
      </Heading>
    </Flex>
  )
}