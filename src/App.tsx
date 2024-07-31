import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

function App() {
	return (
		<>
			<h1 className='text-3xl font-bold underline text-red-600'>
				Hello world!
			</h1>
			<Button onClick={() => toast.error('Event has been created.')}>
				Click me
			</Button>
		</>
	)
}

export default App
