import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserListPage from './pages/users/UserListPage'
import IndexPage from './pages/IndexPage'
import MainLayout from './pages/layouts/MainLayout'
import KothaDetailPage from './pages/kotha/KothaDetailPage'
import SearchInRadius from './pages/map/SearchInRadius'
import KothaCreatePage from './pages/kotha/KothaCreatePage'
import KothaUpdatePage from './pages/kotha/KothaUpdatePage'
import AccountLayout from './pages/accounts/AccountLayout'
import LogoutPage from './pages/LogoutPage'
import DashboardPage from './pages/DashboardPage'
import MyPostsPage from './pages/MyPostsPage'
import AuthRoutes from './utilities/AuthRoutes'
import Dashboard from './components/admin/Dasboard'
import Posts from './components/admin/Posts'
import PostDetail from './components/admin/PostDetail'
import AdminKothaDetailPage from './pages/kotha/AdminKothaDetailPage'
import AdminRoutes from './utilities/AdminRoutes'
import UserDashboard from './components/UserDashboard'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={ <MainLayout /> }>
				<Route index element={ <IndexPage /> } />
				<Route path="details/:id" element={ <KothaDetailPage /> } />
				<Route path="search-in-map" element={ <SearchInRadius /> } />
				<Route element={ <AuthRoutes /> }>
					<Route path="account" element={ <AccountLayout /> }>
						<Route index element={ <UserDashboard /> } />
						<Route path="posts" element={ <MyPostsPage /> } />
						<Route path="posts/:id/update" element={ <KothaUpdatePage /> } />
						<Route path="create-kotha" element={ <KothaCreatePage /> } />
					</Route>
				</Route>
				<Route path="/logout" element={ <LogoutPage /> } />
			</Route>
			<Route path="/login" element={ <LoginPage /> } />
			<Route path="/register" element={ <RegisterPage /> } />

			<Route element={ <AdminRoutes /> }>
				<Route path="admin" element={ <DashboardPage /> }>
					<Route index path='dashboard' element={ <Dashboard /> } />
					<Route path="posts" element={ <Posts /> } />
					<Route path="posts/:id" element={ <AdminKothaDetailPage /> } />
				</Route>

			</Route>

			<Route path="*" element={ <h1>404 Not Found</h1> } />
		</Route>
	)
);
