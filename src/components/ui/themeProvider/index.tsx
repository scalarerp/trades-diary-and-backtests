import React, { ReactNode } from 'react'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Themes } from '../uiInterfaces'

const lightTheme = createTheme({
    type: Themes.light,
})

const darkTheme = createTheme({
    type: Themes.dark,
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    console.log(lightTheme, darkTheme)
    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className,
            }}
        >
            <NextUIProvider>{children}</NextUIProvider>
        </NextThemesProvider>
    )
}

export default ThemeProvider
