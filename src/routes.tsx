import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import UserListPage from './pages/users/UserListPage'
import IndexPage from './pages/IndexPage'
import MainLayout from './pages/layouts/MainLayout'
import KothaDetailPage from './pages/kotha/KothaDetailPage'
import SearchInRadius from './pages/map/SearchInRadius'
import KothaCreatePage from './pages/kotha/KothaCreatePage'
import AccountLayout from './pages/accounts/AccountLayout'
import LogoutPage from './pages/LogoutPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <IndexPage />,
			},
			{
				path: '/details/:id',
				element: <KothaDetailPage />
			},
			{
				path: '/search-in-map',
				element: <SearchInRadius />
			},
			{
				path: '/kotha/create',
				element: <KothaCreatePage />,
			},
			{
				path: '/account',
				element: <AccountLayout />,
				children: [
					{
						path: '',
						element: <h1>hello</h1>
					},
					{
						path: 'create-kotha',
						element: <KothaCreatePage />
					}
				]
			}
		]
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/logout',
		element: <LogoutPage />,
	},
	{
		path: '/users',
		element: <UserListPage />,
	},
])
