import { Header } from '../components/Header'
import S from '../styles/Home.module.css'

const ACTUALY_EMPLOYEE = 'Sortium Studios'
const SITE_EMPLOYEE = 'https://sortium.com'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>FrontEnd @ Sortium Studios</h1>
        <h3>Software Developer</h3>

        <div id="quemsou" className={S.container}>

          <h1>Olá Mundo!</h1>
          <p>
            Sou angelo Reis, casado, pai de duas pitucas e tenho 34 anos de idade.
            Trabalho na área de tecnologia desde os 14 anos de idade. Comecei como
            suporte técnico na empresa da minha família ( se quiser o site, é esse aqui
            <a href="https://arsistemas.com.br" target="_blank" rel="noreferrer">Clique Aqui</a> )
            e estou atualmente empregado na <a href={SITE_EMPLOYEE}>{ACTUALY_EMPLOYEE}</a> como Desenvolvedor de Aplicatições
          </p>

          <p>
            Com decorrer do tempo aprendi por conta própria algumas linguagens, porém,
            depois resolvi aprender de forma certa e com professores qualificados
          </p>
          <p>
            Vou destacar aqui algumas que domino muito bem:
          </p>
          <ul className="techs">
            <li className="techs--item">✅ HTML 5, CSS 3 e BEM</li>
            <li className="techs--item">✅ React JS <strong>Focado</strong> e React Native</li>
            <li className="techs--item">✅ MariaDB, Postgres, MongoDB, Hasura e Redis</li>
            <li className="techs--item">✅ NodeJS (Express, Sequelize, Mongoose, Yup, Nodemailer, bcrypt, date-fns, JWT)</li>
          </ul>
        </div>


        <div id="Contato">
          <div className="contato-text">
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
          </div>
        </div>

      </main>
      <footer>
        Angelo Reis &copy; Todos os direitos reservados - 2022
      </footer>
    </>
  )
}