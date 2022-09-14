import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { ProgressTech } from '../components/ProgressTech'

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
  return (
    <Flex flexDirection="column" alignItems="center" background="purple.900" color="whiteAlpha.900">
      <Header />
      <Flex as="main" flexDirection="column" alignItems="center" width="100%">
        <Flex h="650px" width="100%" flexDirection="column" alignItems="center" justify="center"  background="purple.800">
          <Heading>Software Developer</Heading>
          <Heading size="md">{employee ? 'FrontEnd @ Sortium Studios' : 'FrontEnd - Aberto a propostas'}</Heading>
        </Flex>

        <Flex id="quemsou" width="100%" flexDirection="row" alignItems="center" justify="center" paddingY='15px' background="purple.700">
          <Flex flexDirection="column" alignItems="center" justify="center" w="450px">
            <Image
              src="https://github.com/angeloreis.png"
              width="256px"
              height="256px"
              alt="Foto de perfil do Angelo Reis via Github"
              borderRadius="100%"
              marginY="35px" />
            <Text>
              Sou angelo Reis, tenho 34 anos de idade e sou formado em Jornalismo.
              Trabalho na área de tecnologia desde os 14 anos de idade.
              Comecei como suporte técnico na empresa da minha família (<a href="https://arsistemas.com.br" target="_blank" rel="noreferrer">AR-Sistemas</a>)
              e estou atualmente {employee ? <ActualyEmployee /> : 'estou aberto a propostas'}.
              Com decorrer do tempo aprendi algumas linguagens de forma certa e com professores qualificados.
              Vou destacar aqui algumas métricas das tecnologias que domino:
            </Text>
          </Flex>


          <Flex flexDirection="column" alignItems="center" justify="center" marginY='35px'>
            <Flex gridGap='15px'>
              <ProgressTech techName='HTML' valueOfProgress={80} colorProgress='purple.500' />
              <ProgressTech techName='CSS' valueOfProgress={60} colorProgress='blue.500' />
              <ProgressTech techName='BEM' valueOfProgress={80} colorProgress='green.500' />
              <ProgressTech techName='Javascript' valueOfProgress={70} colorProgress='green.500' />
              <ProgressTech techName='PHP' valueOfProgress={50} colorProgress='blue.500' />
            </Flex>
            <Flex gridGap='15px' marginTop='15px'>
              <ProgressTech techName='ReactJS' valueOfProgress={70} colorProgress='teal.500' />
              <ProgressTech techName='NextJS' valueOfProgress={50} colorProgress='blue.500' />
              <ProgressTech techName='Node.JS' valueOfProgress={40} colorProgress='orange.500' />
              <ProgressTech techName='NestJS' valueOfProgress={20} colorProgress='red.500' />
              <ProgressTech techName='React Native' valueOfProgress={20} colorProgress='red.500' />
            </Flex>
            <Flex gridGap='15px' marginTop='15px'>
              <ProgressTech techName='Docker' valueOfProgress={60} colorProgress='teal.500' />
              <ProgressTech techName='FaunaDB' valueOfProgress={60} colorProgress='teal.500' />
              <ProgressTech techName='Postgres + Hasura' valueOfProgress={40} colorProgress='teal.500' />
              <ProgressTech techName='Firebase' valueOfProgress={30} colorProgress='orange.500' />
              <ProgressTech techName='Redis' valueOfProgress={30} colorProgress='orange.500' />
            </Flex>
          </Flex>
        </Flex>


        <Flex id="contato" h="350px" flexDirection="column" alignItems="center" justify="center">

        <Heading size="3xl">WIP | Construindo...</Heading>
          {/* <div className="contato-text">
            <h3>No momento estou indisponível para contratações e serviços 🙅‍♂️</h3>
            <p>
              Se quiser conversar meus contatos 📱💻 estão abaixo 🧐</p>
          </div>



          <div>
            <span>Envie e-mail para:</span>
            <p><a
              href="mailto:angelo.desenvolvedor@gmail.com?subject=Seu site - Podemos conversar?">angelo.desenvolvedor@gmail.com</a>
            </p>
            <span>Ou se preferir</span>
            <p><a
              href="https://api.whatsapp.com/send?phone=5591992664715&text=Ol%C3%A1%2C%20estou%20precisando%20de%20um%20desenvolvedor%20na%20minha%20empresa!%20Teria%20como%20voc%C3%AA%20d%C3%A1%20uma%20ajuda%3F"
              target="_blank" rel="noreferrer">Clique aqui</a> para conversar direto no whatsapp</p>
          </div> */}
        </Flex>
      </Flex>
      <Flex as="footer" flexDirection="column" alignItems="center" justify="center" paddingY='35px' background="purple.700" w="100%">
        <div>Angelo Reis &copy; Todos os direitos reservados - 2022</div>
      </Flex>
    </Flex>
  )
}