import { useForm, FieldValues, Path } from 'react-hook-form'
import { toast } from 'sonner'
import { apiFetch } from '@/utilities/apiFetch'
import { RequestOptions, ApiResponse, ErrorResponse } from '@/types/commonTypes'

export const useCustomForm = <T extends FieldValues>(options = {}) => {
	const form = useForm<T>({
		mode: 'onTouched',
		...options,
	})
	const { handleSubmit, register, control, formState, setError } = form
	const { errors, isDirty, isSubmitting } = formState

	const api = async <R>(url: string, options: RequestOptions = {}) => {
		try {
			const handleFormValidation = (data: ErrorResponse) => {
				Object.keys(data.error).forEach((key: string) => {
					setError(key as Path<T>, {
						type: 'manual',
						message: data.error[key],
					})
				})
			}

			return await apiFetch<ApiResponse<R>>(url, options, handleFormValidation)
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message)
			} else {
				toast.error('Cannot connect to server: An unknown error occurred')
			}
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
