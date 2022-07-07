import Layout from 'components/layout'
import React from 'react'
import { Text, Container, Title, SimpleGrid, Box } from '@mantine/core'
import { UserEditor, UserView } from 'components/userTest'
import { useGlobalState } from 'store'

const InitialPage = () => {
    return (
        <Layout>
            <Container>
                <Box p={10}>
                    <UserEditor />
                </Box>

                <Title order={6} p={20}>
                    <UserView />
                </Title>

                <Container>
                    <Text color="dimmed">
                        k çlk çlk lçk lçk çlk çlk çlk çlk
                    </Text>
                </Container>

                <SimpleGrid
                    cols={2}
                    spacing={50}
                    breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
                    style={{ marginTop: 30 }}
                >
                    <span>asdfasdfasdf</span>
                    <span>asdfasdfasasdfasdfasddsafdf</span>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default InitialPage
