import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { Sun, MoonStars } from 'tabler-icons-react'
import { Themes } from '../uiInterfaces'

const ThemeSwitcher = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const dark = colorScheme === Themes.dark

    return (
        <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
        >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
        </ActionIcon>
    )
}

export default ThemeSwitcher
