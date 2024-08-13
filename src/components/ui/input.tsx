import * as React from 'react'

import { cn } from '@/lib/utils'
import { FieldError } from 'react-hook-form'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: FieldError
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, error, ...props }, ref) => {
		return (
			<div className='mb-2'>
				<input
					type={ type }
					className={ cn(
						`flex  h-9 w-full rounded-md border ${error ? 'border-red-500 ' : 'border-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'} bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50`,
						className
					) }
					ref={ ref }
					{ ...props }
				/>
				{ error && <p className='text-red-500'>{ error.message }</p> }
			</div>
		)
	}
)
Input.displayName = 'Input'

export { Input }
