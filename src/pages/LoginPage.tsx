import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-label'

const LoginPage = () => {
	return (
		<>
			<div className='mt-20 mb-20'>
				<form className='max-w-md mx-auto p-4 bg-white border border-gray-200'>
					<h2 className='text-2xl mb-8 font-semibold text-center'>
						Please login
					</h2>
					<Input
						type='email'
						placeholder='Email'
					/>
					<Input
						type='password'
						placeholder='Password'
					/>
					<Checkbox id='remember-me' />
					<Label htmlFor='remember-me'>Remember me</Label>
					<Button className='w-full'>Login</Button>
				</form>
			</div>
		</>
	)
}

export default LoginPage
