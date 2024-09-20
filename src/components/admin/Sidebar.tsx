import { NavLink } from "react-router-dom";

function Sidebar() {
	return (
		<div className="tw-bg-gray-800 tw-text-white tw-h-full tw-w-80 tw-flex tw-flex-col">
			<div className="tw-p-6 tw-text-xl tw-font-bold tw-border-b tw-border-gray-700">Admin Dashboard</div>
			<ul className="tw-flex-1 tw-p-4">
				<li className="tw-my-4">
					<NavLink to="/admin/dashboard" className="tw-block tw-text-white tw-p-2 tw-bg-gray-700 tw-rounded hover:tw-bg-gray-600">Dashboard</NavLink>
				</li>
				<li className="tw-my-4">
					<NavLink to="/admin/posts" className="tw-block tw-text-white tw-p-2 tw-bg-gray-700 tw-rounded hover:tw-bg-gray-600">Posts</NavLink>
				</li>
			</ul>
			<div className="tw-p-4 tw-border-t tw-border-gray-700">
				<button className="tw-w-full tw-bg-red-600 tw-py-2 tw-rounded hover:tw-bg-red-500">Logout</button>
			</div>
		</div>
	);
}

export default Sidebar;
