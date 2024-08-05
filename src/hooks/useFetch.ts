import { useQuery } from 'react-query'
import { toast } from 'sonner'

type RequestOptions = {
	method?: string
	headers?: HeadersInit
	body?: string
}

export type Link = {
	url: null | string
	label: string
	active: boolean
}

export type Meta = {
	current_page: number
	from: number
	last_page: number
	links: Link[]
	path: string
	per_page: number
	to: number
	total: number
}

export type Links = {
	first: string
	last: string
	prev: null
	next: string
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

export type ApiResponseWithPagination<T> = ApiResponse<{
	data: T
	links: Links
	meta: Meta
}>

export const useFetch = <R>(url: string, options: RequestOptions = {}) => {
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
		let errorMessage = data.message || 'Something went wrong'
		if (errorMessages[response.status]) {
			errorMessage = errorMessages[response.status]
		}
		throw new Error(errorMessage)
	}

	const fetchData = async () => {
		options.headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			// Authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
			Authorization: `Bearer 10|ZAiPaq2gWyZg6CXGLmJWE32r4wBTKnMVkkfCKFHG0ee2b58d`,
			...options.headers,
		}

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

		return data as R
	}

	const query = useQuery<R, Error>([url, options], fetchData, {
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return query
}
