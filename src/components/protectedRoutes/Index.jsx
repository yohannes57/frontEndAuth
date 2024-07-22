import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/auth/Auth_context'


const ProtectedRoute = () => {

    const {cookies}=useAuth();
  return cookies.token? <Outlet />:<h1>You are not Authorized to view:sorry</h1>
}

export default ProtectedRoute