import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoutes = () => {
	const user = localStorage.getItem('user')

	return user ? <Outlet /> : <Navigate to='/login' />
}

export default AuthRoutes
