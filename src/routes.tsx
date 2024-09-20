import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserListPage from './pages/users/UserListPage'
import IndexPage from './pages/IndexPage'
import MainLayout from './pages/layouts/MainLayout'
import KothaDetailPage from './pages/kotha/KothaDetailPage'
import SearchInRadius from './pages/map/SearchInRadius'
import KothaCreatePage from './pages/kotha/KothaCreatePage'
import AccountLayout from './pages/accounts/AccountLayout'
import LogoutPage from './pages/LogoutPage'
import DashboardPage from './pages/DashboardPage'
import MyPostsPage from './pages/MyPostsPage'
import AuthRoutes from './utilities/AuthRoutes'

// export const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <MainLayout />,
// 		children: [
// 			{
// 				path: '',
// 				element: <IndexPage />,
// 			},
// 			{
// 				path: '/details/:id',
// 				element: <KothaDetailPage />
// 			},
// 			{
// 				path: '/search-in-map',
// 				element: <SearchInRadius />
// 			},
// 			{
// 				path: '/kotha/create',
// 				element: <KothaCreatePage />,
// 			},
// 			{
// 				path: '/account',
// 				element: <AccountLayout />,
// 				children: [
// 					{
// 						path: '',
// 						element: <DashboardPage />
// 					},
// 					{
// 						path: 'posts',
// 						element: <MyPostsPage />
// 					},
// 					{
// 						path: 'create-kotha',
// 						element: <KothaCreatePage />
// 					}
// 				]
// 			}
// 		]
// 	},
// 	{
// 		path: '/login',
// 		element: <LoginPage />,
// 	},
// 	{
// 		path: '/logout',
// 		element: <LogoutPage />,
// 	},
// 	{
// 		path: '/register',
// 		element: <RegisterPage />,
// 	},
// 	{
// 		path: '/users',
// 		element: <UserListPage />,
// 	},
// ])

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={ <MainLayout /> }>
				<Route index element={ <IndexPage /> } />
				<Route path="details/:id" element={ <KothaDetailPage /> } />
				<Route path="search-in-map" element={ <SearchInRadius /> } />
				<Route element={ <AuthRoutes /> }>
					<Route path="account" element={ <AccountLayout /> }>
						<Route index element={ <DashboardPage /> } />
						<Route path="posts" element={ <MyPostsPage /> } />
						<Route path="create-kotha" element={ <KothaCreatePage /> } />
					</Route>
				</Route>
				<Route path="/logout" element={ <LogoutPage /> } />
			</Route>
			<Route path="/login" element={ <LoginPage /> } />
			<Route path="/register" element={ <RegisterPage /> } />
		</Route>
	)
);
