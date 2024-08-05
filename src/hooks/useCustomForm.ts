import { useForm, FieldValues, Path } from 'react-hook-form'
import { toast } from 'sonner'

type RequestOptions = {
	method?: string
	headers?: HeadersInit
	body?: string
}

type ErrorResponse = {
	status: number
	message: string
	errors: { [key: string]: string }
}

export type ApiResponse<T> = {
	data: T
	status: number
	message: string
}

export const useCustomForm = <T extends FieldValues>(options = {}) => {
	const form = useForm<T>({
		mode: 'onTouched',
		...options,
	})
	const { handleSubmit, register, control, formState, setError } = form
	const { errors, isDirty, isSubmitting } = formState

	const errorMessages: { [key: number]: string } = {
		401: 'Unauthorized access. Please log in.',
		403: 'Forbidden access. You do not have the required permissions.',
		404: 'Resource not found.',
		500: 'Internal server error. Please try again later.',
	}

	const handleErrorResponse = async (
		response: Response,
		data: ErrorResponse
	) => {
		if (data.message) {
			throw new Error(data.message)
		}

		let errorMessage = 'Something went wrong'

		if (errorMessages[response.status]) {
			errorMessage = errorMessages[response.status]
		} else if (response.status === 422) {
			errorMessage = data.message
			Object.keys(data.errors).forEach((key: string) => {
				setError(key as Path<T>, {
					type: 'custom',
					message: data.errors[key],
				})
			})
		} else {
			errorMessage = data.message
		}
		throw new Error(errorMessage)
	}

	const api = async <R>(url: string, options: RequestOptions = {}) => {
		options.headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
			...options.headers,
		}

		try {
			const response = await fetch(
				`${import.meta.env.VITE_BASE_URL}/${url}`,
				options
			)
			const data = await response.json()

			if (!response.ok) {
				await handleErrorResponse(response, data)
			}

			const contentType = response.headers.get('Content-Type')
			if (!contentType || !contentType.includes('application/json')) {
				throw new Error('Invalid response format')
			}

			return data as ApiResponse<R>
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message)
			} else {
				toast.error('Cannot connect to server: An unknown error occurred')
			}
			throw error
		}
	}

	return {
		api,
		handleSubmit,
		register,
		control,
		errors,
		isDirty,
		isSubmitting,
	}
}
