import { Flex, Heading, Image, SimpleGrid, Text, useMediaQuery } from '@chakra-ui/react'
import { AboutMe } from '../components/AboutMe'
import { Header } from '../components/Header'

const employee = false
const ACTUALY_EMPLOYEE = 'Sortium Studios'
const SITE_EMPLOYEE = 'https://sortium.com'
const POSITION_JOB = 'Software Engineer'

const ActualyEmployee = () => {
  return <>
    empregado na <a href={SITE_EMPLOYEE}>{ACTUALY_EMPLOYEE}</a> como {POSITION_JOB}
  </>
}

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Flex flexDirection="column" alignItems="center" background="purple.900" color="whiteAlpha.900">
      <Header />
      <Flex as="main" flexDirection="column" alignItems="center" width="100%" minW='319px'>
        <Flex h={isMobile ? '312px':"650px"} width="100%" flexDirection="column" alignItems="center" justify="center" background="purple.800">
          <Heading>Software Developer</Heading>
          <Heading size="md">{employee ? 'FrontEnd @ Sortium Studios' : 'FrontEnd - Aberto a propostas'}</Heading>
        </Flex>

        <AboutMe isMobile={isMobile} employee={employee}>
          <ActualyEmployee />
        </AboutMe>

        <Flex id="contato" h="450px" flexDirection="column" alignItems="center" justify="center">
          {employee ? (
            <>
              <Flex flexDirection="column" alignItems="center" justify="center" padding="15px">
                <Heading size={"lg"}>No momento estou indisponível para contratações e serviços</Heading>
              </Flex>
              <Flex flexDirection="column" alignItems="center" justify="center" padding="15px">
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
          ) : (
            <Flex>
              <Heading size={"lg"}>WIP...</Heading>
            </Flex>
          )}

        </Flex>
      </Flex>
      <Flex as="footer" flexDirection="column" alignItems="center" justify="center" paddingY='35px' paddingX="10px" background="purple.700" w="100%">
        <div>Angelo Reis &copy; Todos os direitos reservados - 2022</div>
      </Flex>
    </Flex>
  )
}