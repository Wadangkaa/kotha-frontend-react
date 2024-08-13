import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/redux/slices/authSlice'
import categorySlice from './slices/categorySlice'

const store = configureStore({
	reducer: {
		auth: authReducer,
		category: categorySlice,
	},
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
