import { Flex, useMediaQuery } from '@chakra-ui/react'

import { Header } from '../components/Header'

import { SectionAboutMe } from '../components/sections/SectionAboutMe'
import { SectionContact } from '../components/sections/SectionContact'
import { SectionFooter } from '../components/sections/SectionFooter'
import { SectionHero } from '../components/sections/SectionHero'
import { SectionPortfolio } from '../components/sections/SectionPortfolio'

import { client } from '../graphql/client'
import { GET_LANDING_PAGE } from '../graphql/queries'
import { LandingPageDataProps } from '../types/api'

export default function Home({ header, aboutMe, tech, portfolio, contactMe }: LandingPageDataProps) {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      background="purple.900"
      color="whiteAlpha.900">
      <Header />
      <Flex
        as="main"
        flexDirection="column"
        alignItems="center"
        width="100%"
        minW='319px'>
        <SectionHero isMobile={isMobile} header={header} />
        <SectionAboutMe aboutMe={aboutMe} tech={tech} />
        <SectionPortfolio portfolio={portfolio} />
        <SectionContact header={header} contactMe={contactMe} />
      </Flex>
      <SectionFooter />
    </Flex>
  )
}

export async function getServerSideProps() {
  const { landingPages } = await client.request(GET_LANDING_PAGE)

  const { header, aboutMe, tech, portfolio, contactMe } = landingPages[0]

  return {
    props: {
      header,
      aboutMe,
      tech,
      portfolio,
      contactMe
    }
  }
}