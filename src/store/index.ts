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
}

export const useGlobalState = (key: StoreKeys, initialData: any) => [
    useQuery(key, () => initialData, {
        enabled: false,
        initialData,
    }).data,
    (value: any) => queryClient.setQueryData(key, value),
]
