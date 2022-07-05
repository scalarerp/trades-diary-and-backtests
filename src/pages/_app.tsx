import { GetServerSidePropsContext } from 'next'
import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { getCookie, setCookies } from 'cookies-next'
import Head from 'next/head'
import {
    MantineProvider,
    ColorScheme,
    ColorSchemeProvider,
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { Themes } from 'components/ui/uiInterfaces'
import { QueryClientProvider } from 'react-query'
import { queryClient, StoreKeys } from 'store'
import SetInitialState from 'components/setInitialState'

export default function App(
    props: AppProps & { colorScheme: ColorScheme; user: string }
) {
    const { Component, pageProps } = props
    const [colorScheme, setColorScheme] = useState<ColorScheme>(
        props.colorScheme
    )

    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme =
            value || (colorScheme === Themes.dark ? Themes.light : Themes.dark)
        setColorScheme(nextColorScheme)
        setCookies(StoreKeys.theme, nextColorScheme, {
            maxAge: 60 * 60 * 24 * 30,
        })
    }

    return (
        <>
            <Head>
                <title>Diary and Back-tests</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>

            <QueryClientProvider client={queryClient}>
                <SetInitialState props={props} />
                <ColorSchemeProvider
                    colorScheme={colorScheme}
                    toggleColorScheme={toggleColorScheme}
                >
                    <MantineProvider
                        theme={{ colorScheme }}
                        withGlobalStyles
                        withNormalizeCSS
                    >
                        <NotificationsProvider>
                            <Component {...pageProps} />
                        </NotificationsProvider>
                    </MantineProvider>
                </ColorSchemeProvider>
            </QueryClientProvider>
        </>
    )
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => {
    return {
        colorScheme: getCookie(StoreKeys.theme, ctx) || Themes.light,
        user: getCookie(StoreKeys.user, ctx) || '',
    }
}
