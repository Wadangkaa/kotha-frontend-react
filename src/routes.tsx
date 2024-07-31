import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import UserListPage from './pages/users/UserListPage'

export const router = createBrowserRouter([
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/app',
		element: <h1>hello</h1>,
	},
	{
		path: '/users',
		element: <UserListPage />,
	},
])
