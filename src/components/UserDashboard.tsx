import { useState } from "react"
import { useSelector } from "react-redux"

const UserDashboard = () => {
	const authStore = useSelector(state => state.auth)
	const [authUser, setAuthUser] = useState(authStore.user ?? JSON.parse(localStorage.getItem('user')))

	return (
		<div>
			<h1 className="tw-text-2xl tw-font-bold tw-text-gray-800">Account Details</h1>

			<div className="tw-container tw-mx-auto tw-px-4">
				<div className="tw-mt-4">
					<p><strong>Name:</strong> { authUser.name }</p>
					<p><strong>Email:</strong> { authUser.email }</p>
					<p><strong>Email Verified At:</strong> { new Date(authUser.email_verified_at).toLocaleString() }</p>
					<p><strong>Admin Status:</strong> { authUser.is_admin ? 'Yes' : 'No' }</p>
					<p><strong>Created At:</strong> { new Date(authUser.created_at).toLocaleString() }</p>
					<p><strong>Updated At:</strong> { new Date(authUser.updated_at).toLocaleString() }</p>
				</div>
			</div>
		</div>
	)
}

export default UserDashboard
