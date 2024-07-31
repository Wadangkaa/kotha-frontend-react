import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from '@/components/ui/sonner.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Toaster
			position='top-right'
			richColors
			closeButton
		/>
		<RouterProvider router={router} />
	</React.StrictMode>
)
