import React from 'react'
import { UserProvider } from './auth/Auth_context'
export const AppProvider = ({children}) => {
  return (
    <UserProvider>
{children}
    </UserProvider>
  )
}
