import { userApi } from '@/apis/userApi'
import { useFetch } from '@/hooks/useFetch'
import { type User } from '@/hooks/useUserData'
import { ApiResponseWithPagination } from '@/types/commonTypes'

const UserListPage = () => {
	const { data: apiResponse } = useFetch<ApiResponseWithPagination<User[]>>(userApi.fetchAllUsers.queryKey, userApi.fetchAllUsers.apiUrl)
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
