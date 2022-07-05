import React, { useEffect } from 'react'
import { queryClient, StoreKeys } from 'store'

const SetInitialState = (props: any) => {
    useEffect(() => {
        if (props.props.user) {
            queryClient.setQueryData(StoreKeys.user, props.props.user)
        }
    }, [])

    return <></>
}

export default SetInitialState
