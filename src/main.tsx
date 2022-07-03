import { Container } from '@nextui-org/react'
import ThemeProvider from './components/ui/themeProvider'
import { createRoot } from 'react-dom/client'
import App from './App'

const container = document.getElementById('root') as HTMLDivElement //as Element | DocumentFragment
const root = createRoot(container)
root.render(
    <>
        <ThemeProvider>
            <Container>
                <App />
            </Container>
        </ThemeProvider>
    </>
)

