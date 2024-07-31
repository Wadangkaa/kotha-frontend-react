import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from '@/components/ui/sonner.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Toaster
			position='top-right'
			richColors
			closeButton
		/>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools
				initialIsOpen={false}
				position='bottom-right'
			/>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
)
