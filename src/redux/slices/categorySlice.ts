import { Category } from '@/types/models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
	name: 'categories',
	initialState: { categories: [] as Category[] },
	reducers: {
		setCategories: (state, action: PayloadAction<Category[]>) => {
			state.categories = action.payload
		},
	},
})

export const { setCategories } = categorySlice.actions
export default categorySlice.reducer
