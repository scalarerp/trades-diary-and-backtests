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
    return [StoreKeys.user].includes(key)
}

export const useGlobalState = (key: StoreKeys, initialData: any) => [
    useQuery(key, () => initialData, {
        enabled: false,
        initialData,
    }).data,
    (value: any) => {
        if (isCookie(key)) {
            setCookie(key, value)
        }
        queryClient.setQueryData(key, value)
    },
]
