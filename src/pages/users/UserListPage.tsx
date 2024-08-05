import { useFetch, ApiResponseWithPagination } from '@/hooks/useFetch'
import { type User } from '@/hooks/useUserData'

const UserListPage = () => {
	const { data: apiResponse } = useFetch<ApiResponseWithPagination<User[]>>('api/admin/users')
	return (
		<div>
			{ apiResponse &&
				apiResponse.data.data.map((user: User) => (
					<div key={ user.id }>{ user.name }</div>
				)) }
		</div>
	)
}

export default UserListPage
