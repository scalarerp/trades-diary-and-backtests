import Layout from 'components/layout'
import React from 'react'
import { Text, Container, Title, SimpleGrid } from '@mantine/core'

const InitialPage = () => {
    return (
        <Layout>
            <Container>
                <Text>Text</Text>

                <Title order={2}>
                    PharmLand is <span>not</span> just for pharmacists
                </Title>

                <Container size={660} p={100}>
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
