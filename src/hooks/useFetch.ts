import { useQuery } from 'react-query'
import { toast } from 'sonner'
import { apiFetch } from '@/utilities/apiFetch'
import { RequestOptions } from '@/types/commonTypes'

export const useFetch = <R>(
	queryName: string | Array<string>,
	url: string,
	options: RequestOptions = {}
) => {
	const query = useQuery<R, Error>(queryName, () => apiFetch<R>(url, options), {
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return query
}
