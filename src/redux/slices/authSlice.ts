import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		token: null,
		isAuthenticated: false,
	},
	reducers: {},
})

export const {} = authSlice.actions
export default authSlice.reducer
