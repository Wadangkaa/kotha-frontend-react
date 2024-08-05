import { useQuery } from 'react-query'

export const fetchProfile = async () => {
	const response = await fetch('http://localhost:8000/api/fetchProfile')
	const data = await response.json()
	return data
}

export const fetchProfileUsingReactQuery = async () => {
	useQuery({})
}
