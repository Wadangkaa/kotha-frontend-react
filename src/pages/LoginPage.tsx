import { useCustomForm } from '@/hooks/useCustomForm'
import { z } from 'zod'
import { Input } from '@/components/ui/user/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import authSlice, { setAuth } from '@/redux/slices/authSlice'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'

const LoginSchema = z.object({
	email: z.string().email(),
	password: z.string(),
})

type LoginFormValue = z.infer<typeof LoginSchema>

const LoginPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const authStore = useSelector((state) => state.auth)

	const { api, register, handleSubmit, errors, control, isDirty, isSubmitting } =
		useCustomForm<LoginFormValue>({
			resolver: zodResolver(LoginSchema),
		})

	const onSubmit = async (data: LoginFormValue) => {
		const response = await api('api/login', {
			method: 'POST',
			body: JSON.stringify(data),
		})

		dispatch(setAuth(response.data))

		navigate('/account')

	}
	return (
		<>
			<div className="axil-signin-area">

				<div className="signin-header">
					<div className="row align-items-center">
						<div className="col-sm-4 ">
							<NavLink to="/" className="site-logo">
								<img src="/assets/images/logo/kotha-horizontal.png" alt="logo" className='tw-w-[200px]' /></NavLink>
						</div>
						<div className="col-sm-8">
							<div className="singin-header-btn">
								<p>Not a member?</p>
								<NavLink to="/register" className="axil-btn btn-bg-secondary sign-up-btn">Register Now</NavLink>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-xl-4 col-lg-6">
						<div className="axil-signin-banner bg_image" style={ { backgroundColor: '#888' } }>
							<h3 className="title">A room rental service</h3>
						</div>
					</div>
					<div className="col-lg-6 offset-xl-2">
						<div className="axil-signin-form-wrap">
							<div className="axil-signin-form">
								<h3 className="title">Login to <span className='tw-font-semibold tw-text-2xl'>Kotha</span></h3>
								<p className="b2 mb--55"></p>
								<form onSubmit={ handleSubmit(onSubmit) } className="singin-form" noValidate>
									<div className="form-group">
										<Input type="email" label='Email' placeholder='user@example.com' { ...register('email') } error={ errors.email } />
									</div>
									<div className="form-group">
										<Input type='password' label='Password' placeholder='***********' { ...register('password') } error={ errors.password } />
									</div>
									<div className="form-group d-flex align-items-center justify-content-between">
										<button type="submit" className="axil-btn btn-bg-primary submit-btn">Login</button>
										{/* <a href="forgot-password.html" className="forgot-btn">Forget password?</a> */ }
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default LoginPage
