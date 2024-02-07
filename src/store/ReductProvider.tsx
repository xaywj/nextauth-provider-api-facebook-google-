"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { StoreRedux } from './Store'

export default function ReductProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={StoreRedux}>
            {children}
        </Provider>
    )
}
