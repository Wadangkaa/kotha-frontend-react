import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/redux/slices/authSlice'
import categorySlice from './slices/categorySlice'
import kothaSlice from './slices/kothaSlice'

const store = configureStore({
	reducer: {
		auth: authReducer,
		category: categorySlice,
		kotha: kothaSlice,
	},
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
