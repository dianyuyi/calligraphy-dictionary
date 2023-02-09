// import '../styles/globals.css'
import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import { appWithTranslation } from 'next-i18next'

import GlobalStyles from 'src/styles/GlobalStyles'
import { theme } from 'src/styles/theme'

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="%s | calligraphy dictionary"
        openGraph={{
          type: 'website',
          locale: 'zh_TW',
          description: '書法相關名詞-中英日對照',
          site_name: `calligraphy-dictionary`,
          images: [],
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/assets/favicon.ico',
          },
        ]}
      />
      <GlobalStyles />
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AnimatePresence>
    </>
  )
}
export default appWithTranslation(App)
