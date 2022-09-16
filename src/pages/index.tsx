import { Button, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import * as yup from 'yup'
import { AboutMe } from '../components/AboutMe'
import { Input } from '../components/Form/Input'
import { Textarea } from '../components/Form/TextArea'
import { Header } from '../components/Header'
import { apiSendGrid } from '../services/api';

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
  const data = {
    personalizations: [
      {
        to: [
        { email: "angelo.desenvolvedor@gmail.com" }
      ] }],
      from: { email: "test@angeloreis.dev.br" },
      subject: "Sending with SendGrid is Fun cURL => Axios",
      content: [{
         type: "text/html",
         value: "<strong>and easy to do anywhere, even with Node.js</strong>"
         }]
  }

  apiSendGrid.post('/send', data).then(() => {
      console.log('Email sent')
    })
    .catch((error: any) => {
      console.error(error)
    })
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
            <Flex as="form" minW="319px" maxW="650px" w="100%" flexDir="column" gap="10px" onSubmit={(e) => onComplete(e)}>
              <Input name="email" type="email" label="E-mail" />
              <Input name="subject" type="text" label="Assunto" />
              <Textarea name="message" label="Mensagem" placeholder='digite aqui o que você ou sua empresa precisa...' />
              <Button background="green.600" type='submit'>Enviar</Button>
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