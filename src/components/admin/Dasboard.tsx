import { ApiResponse } from '@/hooks/useCustomForm';
import { apiFetch } from '@/utilities/apiFetch';
import React, { useEffect, useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

// Define the structure of the API response
interface DashboardData {
	usersCount: number;
	kothCount: number;
	pendingPostsCount: number;
	rejectedPostsCount: number;
}

const Dashboard: React.FC = () => {
	// Define state to store the data from the API
	const [data, setData] = useState<DashboardData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// Fetch the data from the API
	useEffect(() => {
		const fetchDashboardData = async () => {
			try {
				const response = await apiFetch<ApiResponse<DashboardData>>('api/dashboard-stats');

				setData(response.data);
				setLoading(false);
			} catch (err) {
				setError('Failed to fetch data');
				setLoading(false);
			}
		};

		fetchDashboardData();
	}, []);

	if (loading) {
		return <div className="tw-flex tw-p-40 tw-justify-center">
			<FadeLoader
				color="#3577F0"
				loading={ loading }
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>;
	}

	if (error) {
		return <p className="tw-text-red-600">{ error }</p>;
	}

	return (
		<div>
			<h1 className="tw-text-2xl tw-font-bold tw-text-gray-800">Welcome to the Admin Dashboard</h1>
			<div className="tw-grid tw-grid-cols-3 tw-gap-6 tw-mt-6">

				<div className="tw-bg-white tw-p-4 tw-rounded tw-shadow-sm">
					<h2 className="tw-text-xl tw-font-bold">Users</h2>
					<p className="tw-text-gray-600">{ data?.usersCount } Users</p>
				</div>

				<div className="tw-bg-white tw-p-4 tw-rounded tw-shadow-sm">
					<h2 className="tw-text-xl tw-font-bold">kotha</h2>
					<p className="tw-text-gray-600">{ data?.kothCount } kotha</p>
				</div>

				<div className="tw-bg-white tw-p-4 tw-rounded tw-shadow-sm">
					<h2 className="tw-text-xl tw-font-bold">Pending posts</h2>
					<p className="tw-text-gray-600">{ data?.pendingPostsCount } Pending Posts</p>
				</div>

				<div className="tw-bg-white tw-p-4 tw-rounded tw-shadow-sm">
					<h2 className="tw-text-xl tw-font-bold">Rejected posts</h2>
					<p className="tw-text-gray-600">{ data?.rejectedPostsCount } Rejected Posts</p>
				</div>

			</div>
		</div>
	);
}

export default Dashboard;
