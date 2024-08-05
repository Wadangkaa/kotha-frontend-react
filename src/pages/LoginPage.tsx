import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCustomForm } from '@/hooks/useCustomForm'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-label'
import { z } from 'zod'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'

const LoginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
})

type LoginFormValue = z.infer<typeof LoginSchema>

const LoginPage = () => {
	const { api, register, handleSubmit, errors, control } =
		useCustomForm<LoginFormValue>({
			resolver: zodResolver(LoginSchema),
		})

	const onSubmit = async (data: LoginFormValue) => {
		const response = await api('api/login', {
			method: 'POST',
			body: JSON.stringify(data),
		})
		console.log(response)
	}
	return (
		<>
			<div className='mt-20 mb-20'>
				<form
					className='max-w-md mx-auto p-4 bg-white border border-gray-200'
					onSubmit={handleSubmit(onSubmit)}
					noValidate
				>
					<h2 className='text-2xl mb-8 font-semibold text-center'>
						Please login
					</h2>
					<Input
						type='email'
						placeholder='Email'
						{...register('email')}
						error={errors.email}
					/>
					<Input
						type='password'
						placeholder='Password'
						{...register('password')}
						error={errors.password}
					/>
					<Checkbox id='remember-me' />
					<Label htmlFor='remember-me'>Remember me</Label>
					<Button className='w-full'>Login</Button>
				</form>

				<DevTool control={control} />
			</div>
		</>
	)
}

export default LoginPage
