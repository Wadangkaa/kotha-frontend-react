import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCustomForm } from '@/hooks/useCustomForm'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-label'
import { z } from 'zod'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '@/redux/slices/authSlice'
import { ApiResponse } from '@/types/commonTypes'
import { User } from '@/hooks/useUserData'

const LoginSchema = z.object({
	email: z.string(),
	password: z.string().min(8),
})

type LoginFormValue = z.infer<typeof LoginSchema>

const LoginPage = () => {
	const authStore = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	const { api, register, handleSubmit, errors, control } =
		useCustomForm<LoginFormValue>({
			resolver: zodResolver(LoginSchema),
		})

	const onSubmit = async (data: LoginFormValue) => {
		const response = await api<ApiResponse<{ user: User, token: string }>>('api/login', {
			method: 'POST',
			body: JSON.stringify(data),
		})

		dispatch(setAuth(response?.data))
	}

	return (
		<>
			<div className='tw-mt-20 tw-mb-20'>
				<form
					className='tw-max-w-md tw-mx-auto tw-p-4 tw-bg-white tw-border tw-border-gray-200'
					onSubmit={ handleSubmit(onSubmit) }
					noValidate
				>
					<h2 className='tw-text-2xl tw-mb-8 tw-font-semibold tw-text-center'>
						Please login
					</h2>
					<Input
						type='email'
						placeholder='Email'
						{ ...register('email') }
						error={ errors.email }
					/>
					<Input
						type='password'
						placeholder='Password'
						{ ...register('password') }
						error={ errors.password }
					/>
					<Checkbox id='remember-me' />
					<Label htmlFor='remember-me'>Remember me</Label>
					<Button className='tw-w-full'>Login</Button>
				</form>

				<DevTool control={ control } />
			</div>
		</>
	)
}

export default LoginPage
