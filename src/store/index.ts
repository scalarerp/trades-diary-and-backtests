import { setCookie } from 'cookies-next'
import { useQuery, QueryClient } from 'react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

export enum StoreKeys {
    user = 'user',
    theme = 'theme',
}

const isCookie = (key: StoreKeys) => {
    console.log('isCookie', key)
    return [StoreKeys.user].includes(key)
}

interface SetGlobalState<T> {
    (newState: T): void
}
export function useGlobalState<T = undefined>(
    key: StoreKeys
): [T, SetGlobalState<T>]

export function useGlobalState<T>(
    key: StoreKeys,
    initialState: T
): [T, SetGlobalState<T>]

export function useGlobalState<T>(
    key: StoreKeys,
    initialState?: T
): [T | undefined, SetGlobalState<T>] {
    const { data } = useQuery(key, () => initialState, {
        initialData: initialState,
        // staleTime: Infinity,
        enabled: false,
    })

    const setData = (newState: T) => {
        if (isCookie(key)) {
            setCookie(key, newState, {
                maxAge: 60 * 60 * 24 * 30,
            })
        }
        queryClient.setQueryData(key, newState)
    }

    return [data, setData]
}
