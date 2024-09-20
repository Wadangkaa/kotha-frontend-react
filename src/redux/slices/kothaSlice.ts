import { createSlice } from '@reduxjs/toolkit'

export const kothaSlice = createSlice({
	name: 'auth',
	initialState: {
		authRecommendedKothas: [],
	},
	reducers: {
		setAuthRecommendedKothas: (state, action) => {
			state.authRecommendedKothas = action.payload
		},
	},
})

export const { setAuthRecommendedKothas } = kothaSlice.actions
export default kothaSlice.reducer
