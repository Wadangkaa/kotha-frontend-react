import { useQuery } from 'react-query'

export type User = {
	id: number
	name: string
	email: string
	email_verified_at: Date
	created_at: Date
	updated_at: Date
}

export const fetchUsers = async () => {
	const response = await fetch('http://127.0.0.1:8000/api/admin/users', {
		headers: {
			Authorization: `Bearer 9|VnOuDYNJEVWeLM9jz5fNBspz7BrYw516r711uYkhffa7bcba`,
			'Content-Type': 'application/json',
		},
	})
	return await response.json()
}

export const useUserData = () => {
	return useQuery('users', fetchUsers)
}
