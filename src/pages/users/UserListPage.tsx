import { type User, useUserData } from '@/hooks/useUserData'

const UserListPage = () => {
	const { data } = useUserData()
	return (
		<div>
			{data &&
				data.data.data.map((user: User) => (
					<div key={user.id}>{user.name}</div>
				))}
		</div>
	)
}

export default UserListPage
