import { useCustomForm } from '@/hooks/useCustomForm'
import { z } from 'zod'
import { Input } from '@/components/ui/user/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const RegisterUserSchema = z.object({
	name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
	email: z.string().email({ message: "Invalid email address" }),
	password: z.string()
		.min(8, { message: "Password must be at least 8 characters long" })
		.regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
		.regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
		.regex(/\d/, { message: "Password must contain at least one number" })
		.regex(/[\W_]/, { message: "Password must contain at least one special character" }),
	confirm_password: z.string()
		.min(8, { message: "Password must be at least 8 characters long" })
}).refine((data) => data.password === data.confirm_password, {
	path: ['confirm_password'],
	message: "Passwords don't match",
});
type RegisterFormValue = z.infer<typeof RegisterUserSchema>

const RegisterPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { api, register, handleSubmit, errors, control, isDirty, isSubmitting } =
		useCustomForm<RegisterFormValue>({
			resolver: zodResolver(RegisterUserSchema),
		})

	const onSubmit = async (data: RegisterFormValue) => {

		const response = await api('api/register', {
			method: 'POST',
			body: JSON.stringify(data),
		})

		toast.success(response.message)

		navigate('/login')

	}
	return (
		<>
			<div className="axil-signin-area">

				<div className="signin-header">
					<div className="row align-items-center">
						<div className="col-sm-6 ">
							<NavLink to="/" className="site-logo">
								<img src="/assets/images/logo/kotha-horizontal.png" alt="logo" className='tw-w-[200px]' /></NavLink>
						</div>
						<div className="col-md-6">
							<div className="singin-header-btn">
								<p>Already a member?</p>
								<NavLink to="/login" className="axil-btn btn-bg-secondary sign-up-btn">Login In</NavLink>
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
								<form className="singin-form" onSubmit={ handleSubmit(onSubmit) } noValidate>
									<div className="form-group">
										<Input label='Name' placeholder='Name' { ...register('name') } error={ errors.name } />
									</div>
									<div className="form-group">
										<Input type='email' label='Email' placeholder='user@example.com' { ...register('email') } error={ errors.email } />
									</div>
									<div className="form-group">
										<Input type='password' label='Password' placeholder='**********' { ...register('password') } error={ errors.password } />
									</div>
									<div className="form-group">
										<Input type='password' label='Confirm Password' placeholder='**********' { ...register('confirm_password') } error={ errors.confirm_password } />
									</div>
									<div className="form-group">
										<button type="submit" className="axil-btn btn-bg-primary submit-btn">Create Account</button>
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

export default RegisterPage
