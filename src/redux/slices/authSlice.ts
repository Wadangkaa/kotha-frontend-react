import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		token: null,
		isAuthenticated: false,
	},
	reducers: {
		setAuth: (state, action) => {
			state.user = action.payload.user
			state.token = action.payload.token
			state.isAuthenticated = true
		},
	},
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer
