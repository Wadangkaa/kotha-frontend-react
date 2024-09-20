import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
	const isAdmin = localStorage.getItem('is_admin')

	return isAdmin ? <Outlet /> : <Navigate to='/login' />
}

export default AdminRoutes
