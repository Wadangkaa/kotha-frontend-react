import { ErrorResponse, RequestOptions } from '@/types/commonTypes'

export const defaultHeaders = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	Authorization: `Bearer ${
		localStorage.getItem('token') ? localStorage.getItem('token') : ''
	}`,
}

export const handleErrorResponse = async (
	response: Response,
	data: ErrorResponse,
	handleValidationError?: (data: ErrorResponse) => void
) => {
	let errorMessage = 'Internal Server error'

	if (data.message) {
		errorMessage = data.message
	}

	if (response.status === 422 && handleValidationError) {
		handleValidationError(data)
	}

	throw new Error(errorMessage)
}

export const apiFetch = async <R>(
	url: string,
	options: RequestOptions = {},
	handleValidationError?: (data: ErrorResponse) => void
) => {
	options.headers = {
		...defaultHeaders,
		...options.headers,
	}

	const response = await fetch(
		`${import.meta.env.VITE_BASE_URL}/${url}`,
		options
	)
	const data = await response.json()

	if (!response.ok) {
		await handleErrorResponse(response, data, handleValidationError)
	}

	const contentType = response.headers.get('Content-Type')
	if (!contentType || !contentType.includes('application/json')) {
		throw new Error('Invalid response format')
	}

	return data as R
}
