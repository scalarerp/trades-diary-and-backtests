import React, { useState } from 'react'
import {
    createStyles,
    Header,
    Container,
    Group,
    Burger,
    Paper,
    Transition,
    Box,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import ThemeSwitcher from 'components/ui/themeSwitcher'
import { UserView } from 'components/userTest'

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },

    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][
                theme.colorScheme === 'dark' ? 3 : 7
            ],
        },
    },
}))

interface ILinks {
    id: string
    link: string
    label: string
    component?: React.ReactNode
}

const links: ILinks[] = [
    {
        id: 'about',
        link: '/about',
        label: 'Features',
    },
    {
        id: 'pricing',
        link: '/pricing',
        label: 'Pricing',
    },
    {
        id: 'learn',
        link: '/learn',
        label: 'Learn',
    },
    {
        id: 'community',
        link: '/community',
        label: 'Community',
    },
    {
        id: 'theme',
        link: '',
        label: '',
        component: <ThemeSwitcher />,
    },
    {
        id: 'user',
        link: '',
        label: '',
        component: (
            <Box py={5} component="small">
                <UserView />
            </Box>
        ),
    },
]

const HeaderResponsive = () => {
    const [opened, toggleOpened] = useBooleanToggle(false)
    const [active, setActive] = useState(links[0].link)
    const { classes, cx } = useStyles()

    const LinksItems = () => {
        return (
            <>
                {links.map((link) => {
                    if (!!link.component)
                        return <span key={link.id}>{link.component}</span>

                    return (
                        <a
                            key={link.id}
                            href={link.link}
                            className={cx(classes.link, {
                                [classes.linkActive]: active === link.link,
                            })}
                            onClick={(event) => {
                                event.preventDefault()
                                setActive(link.link)
                                toggleOpened(false)
                            }}
                        >
                            {link.label}
                        </a>
                    )
                })}
            </>
        )
    }

    return (
        <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
            <Container className={classes.header}>
                <Group spacing={5} className={classes.links}>
                    <LinksItems />
                </Group>

                <Burger
                    opened={opened}
                    onClick={() => toggleOpened()}
                    className={classes.burger}
                    size="sm"
                />

                <Transition
                    transition="pop-top-right"
                    duration={200}
                    mounted={opened}
                >
                    {(styles) => (
                        <Paper
                            className={classes.dropdown}
                            withBorder
                            style={styles}
                        >
                            <LinksItems />
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    )
}

export default HeaderResponsive
