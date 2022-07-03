import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

interface ApplicationState {
    user: string
}

export const store = proxy<ApplicationState>({
    user: '',
})
const unsub = devtools(store, 'trades-diary-and-backtest')
