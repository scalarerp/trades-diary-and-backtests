import ThemeSwitcher from 'components/ui/themeSwitcher'
import React from 'react'
import HeaderResponsive from './header'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeaderResponsive />
            {children}
        </>
    )
}

export default Layout
