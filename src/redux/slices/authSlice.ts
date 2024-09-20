import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		token: null,
		isAuthenticated: false,
		isAdmin: false,
	},
	reducers: {
		setAuth: (state, action) => {
			state.user = action.payload.user
			state.token = action.payload.token
			state.isAuthenticated = true
			state.isAdmin = action.payload.user.is_admin

			localStorage.setItem('user', JSON.stringify(action.payload.user))
			localStorage.setItem('token', action.payload.token)
			localStorage.setItem('isAdmin', action.payload.user.is_admin)
		},
		logout: (state) => {
			state.user = null
			state.token = null
			state.isAuthenticated = false
			state.isAdmin = false

			localStorage.removeItem('user')
			localStorage.removeItem('token')
			localStorage.removeItem('isAdmin')
		},
	},
})

export const { setAuth, logout } = authSlice.actions
export default authSlice.reducer
