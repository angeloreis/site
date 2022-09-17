

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
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  