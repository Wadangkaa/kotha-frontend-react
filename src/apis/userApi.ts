type ApiFormat = { [key: string]: { queryKey: string; apiUrl: string } }

export const userApi: ApiFormat = {
	fetchAllUsers: { queryKey: 'users', apiUrl: 'api/admin/users' },
	updateUser: { queryKey: 'users-update-1', apiUrl: 'api/admin/users' },
}
