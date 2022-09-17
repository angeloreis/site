

import Document, {
    Html,
    Head,
    Main,
    NextScript
  } from 'next/document'
  
  export default class MyDocument extends Document {
      render() {
      return (
        <Html>
          <Head lang="pt-BR" title='Angelo Reis - FrontEnd'>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="description" content="Site do Desenvolvedor Angelo Reis" />
                <meta name="keywords" content="HTML, CSS, JavaScript, ReactJS, NodeJS, ORM" />
                <meta name="author" content="Angelo Reis" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  