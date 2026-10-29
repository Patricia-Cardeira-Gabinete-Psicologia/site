import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

  return (
    <Html lang="pt-PT" className='scroll-smooth' style={{scrollBehavior: 'smooth'}}>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 32x32 48x48" />
        <link rel="icon" href="/static/logo-monogram.png" type="image/png" sizes="192x192" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://website-widgets.pages.dev/dist/sienna.min.js" defer></script>
      </body>
    </Html>
  )
}