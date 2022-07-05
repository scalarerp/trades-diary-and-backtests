import { TextInput, Text } from '@mantine/core'
import React from 'react'
import { StoreKeys, useGlobalState } from 'store'

export const UserEditor = () => {
    const [value, setValue] = useGlobalState(StoreKeys.user, '')
    return (
        <TextInput
            label="UserName"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export const UserView = () => {
    const [value] = useGlobalState(StoreKeys.user, '')
    return (
        <>
            USER:
            <Text>{value}</Text>
        </>
    )
}
