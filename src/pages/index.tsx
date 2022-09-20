import { Button, Flex, Heading, SimpleGrid, Text, useMediaQuery } from '@chakra-ui/react'
import { FaGithub, FaMailBulk, FaWhatsapp } from 'react-icons/fa'
import * as yup from 'yup'
import { AboutMe } from '../components/AboutMe'
// import { Input } from '../components/Form/Input'
// import { Textarea } from '../components/Form/TextArea'
import { Header } from '../components/Header'
import { PortFolioBox } from '../components/PortFolioBox'
// import { apiSendGrid } from '../services/api';

const employee = false
const ACTUALY_EMPLOYEE = 'Sortium Studios'
const SITE_EMPLOYEE = 'https://sortium.com'
const POSITION_JOB = 'Software Engineer'

const ActualyEmployee = () => {
  return <>
    empregado na <a href={SITE_EMPLOYEE}>{ACTUALY_EMPLOYEE}</a> como {POSITION_JOB}
  </>
}

const contactFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  subject: yup.string().required('Assunto é obrigatório'),
  message: yup.string()
})




const onComplete = (e: any) => {
  e.preventDefault();
  alert('WIP - tente contato pelo whatsapp +55 91 99266-4715');
  return
  // const data = {
  //   personalizations: [
  //     {
  //       to: [
  //       { email: "angelo.desenvolvedor@gmail.com" }
  //     ] }],
  //     from: { email: "test@angeloreis.dev.br" },
  //     subject: "Sending with SendGrid is Fun cURL => Axios",
  //     content: [{
  //        type: "text/html",
  //        value: "<strong>and easy to do anywhere, even with Node.js</strong>"
  //        }]
  // }

  // apiSendGrid.post('/send', data).then(() => {
  //     console.log('Email sent')
  //   })
  //   .catch((error: any) => {
  //     console.error(error)
  //   })
}

export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Flex flexDirection="column" alignItems="center" background="purple.900" color="whiteAlpha.900">
      <Header />
      <Flex as="main" flexDirection="column" alignItems="center" width="100%" minW='319px'>
        <Flex h={isMobile ? '312px' : "650px"} width="100%" flexDirection="column" alignItems="center" justify="center" background="purple.800">
          <Heading>Software Developer</Heading>
          <Heading size="md">{employee ? 'FrontEnd @ Sortium Studios' : 'FrontEnd - Aberto a propostas'}</Heading>
        </Flex>

        <AboutMe isMobile={isMobile} employee={employee}>
          <ActualyEmployee />
        </AboutMe>

        
        <Flex id="portifolio"  h='100%' w="100%" flexDirection="column" alignItems="center" justify="center" paddingY='15px'>
          <Heading paddingTop="24px">Portifólio</Heading>
          <SimpleGrid columns={[1, 2]} spacing='32px' paddingY="24px" alignItems="center" justifyContent="center">
            <PortFolioBox image={{ source: './leosousa-site.png', height: '210px', alt: 'Site do Locutor Leo Sousa' }} title='Site do locutor Léo Sousa' description='NextJS + Chakra-UI + FaunaDB + Prismic' isActiveSite={true} />
            <PortFolioBox image={{ source: './geralink-whatsapp-site.png', height: '210px', alt: 'Gerar link para whatsapp' }} title='Gerador de link para whatsApp' description='HTML + CSS + JS' isActiveSite={false} />
            <PortFolioBox image={{ source: './kfilmes-site.png', height: '210px', alt: 'Site da KFilmes produtora' }} title='KFilmes - Produtora e Multimídia' description='NextJS + Chakra-UI' isActiveSite={false} />
            <PortFolioBox image={{ source: './radioweb-player.png', height: '210px', alt: 'Estudo ViteJS e Audio() api' }} title='Player Radio Web' description='Estudo ViteJS e Audio() api' isActiveSite={false} />
          </SimpleGrid>
        </Flex>

        <Flex id="contato" h="450px" w='100%' flexDirection="column" alignItems="center" justify="center" background="purple.700">
          <Heading paddingY="24px">Contato</Heading>
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
            <Flex minW="319px" maxW="650px" w="100%" flexDir="column" paddingX='15px' gap='10px' onSubmit={(e) => onComplete(e)}>
              {/*
                <Input name="email" type="email" label="E-mail" />
                <Input name="subject" type="text" label="Assunto" />
                <Textarea name="message" label="Mensagem" placeholder='digite aqui o que você ou sua empresa precisa...' />
                <Button background="green.600" type='submit'>Enviar</Button>
              */}
              <Button
                size="md"
                background="facebook.900"
                leftIcon={<FaMailBulk />}
                _hover={{
                  background: "purple.700"
                }}>
                <a href="mailto://angelo.desenvolvedor@gmail.com"
                  target="_blank"
                  rel="noreferrer">E-mail</a>
              </Button>
              <Button
                size="md"
                background="facebook.900"
                leftIcon={<FaWhatsapp />}
                _hover={{
                  background: "purple.700"
                }}>
                <a href="https://api.whatsapp.com/send?phone=5591992664715&text=Ol%C3%A1%2C%20estou%20precisando%20de%20um%20desenvolvedor%20na%20minha%20empresa!%20Teria%20como%20voc%C3%AA%20d%C3%A1%20uma%20ajuda%3F"
                  target="_blank"
                  rel="noreferrer">
                  Meu Whatsapp
                </a>
              </Button>
              <Button
                size="md"
                background="facebook.900"
                leftIcon={<FaGithub />}
                _hover={{
                  background: "purple.700"
                }}>
                <a href="https://github.com/angeloreis"
                  target="_blank"
                  rel="noreferrer">
                  @angeloreis
                </a>
              </Button>
            </Flex>
          )}

        </Flex>
      </Flex>
      <Flex as="footer" flexDirection="column" alignItems="center" justify="center" paddingY='35px' paddingX="10px" background="blackAlpha.900" w="100%">
        <div>Angelo Reis &copy; Todos os direitos reservados - 2009/2022</div>
      </Flex>
    </Flex>
  )
}
