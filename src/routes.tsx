import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import UserListPage from './pages/users/UserListPage'
import IndexPage from './pages/IndexPage'
import MainLayout from './pages/layouts/MainLayout'
import KothaDetailPage from './pages/kotha/KothaDetailPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <IndexPage />,
			},
			{
				path: '/details/:id',
				element: <KothaDetailPage />
			}
		]
	},
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
