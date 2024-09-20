import { useState, useEffect } from 'react';
import { apiFetch } from '@/utilities/apiFetch';
import { Kotha } from '@/types/models';
import { ApiResponseWithPagination } from '@/types/commonTypes';

const PostListPage = () => {
	const [posts, setPosts] = useState<Kotha[]>([]);
	const [statusFilter, setStatusFilter] = useState<number | null>(null);
	const [loading, setLoading] = useState(false);

	// Fetch posts from API
	const fetchPosts = async () => {
		setLoading(true);
		try {
			const response = await apiFetch<ApiResponseWithPagination<Kotha[]>>('api/admin/kotha');
			setPosts(response.data.data);
		} catch (error) {
			console.error('Failed to fetch posts', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	// Calculate counts for each status
	const pendingCount = posts.filter(post => post.status === 1).length;
	const approvedCount = posts.filter(post => post.status === 2).length;
	const rejectedCount = posts.filter(post => post.status === 3).length;

	// Filter posts based on selected status
	const filteredPosts = statusFilter
		? posts.filter(post => post.status === statusFilter)
		: posts;

	return (
		<div className="tw-container tw-mx-auto tw-px-4">
			<div className="tw-flex tw-gap-4 tw-mb-4">
				<button
					onClick={ () => setStatusFilter(null) }
					className="tw-px-4 tw-py-2 tw-bg-gray-200 tw-rounded"
				>
					All
				</button>
				<button
					onClick={ () => setStatusFilter(1) }
					className="tw-px-4 tw-py-2 tw-bg-yellow-200 tw-rounded"
				>
					Pending ({ pendingCount })
				</button>
				<button
					onClick={ () => setStatusFilter(2) }
					className="tw-px-4 tw-py-2 tw-bg-green-200 tw-rounded"
				>
					Approved ({ approvedCount })
				</button>
				<button
					onClick={ () => setStatusFilter(3) }
					className="tw-px-4 tw-py-2 tw-bg-red-200 tw-rounded"
				>
					Rejected ({ rejectedCount })
				</button>
			</div>

			{ loading && <div>Loading...</div> }

			<table className="tw-table-auto tw-w-full tw-border-collapse tw-border tw-border-gray-200">
				<thead>
					<tr>
						<th className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">ID</th>
						<th className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">Title</th>
						<th className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">Status</th>
					</tr>
				</thead>
				<tbody>
					{ filteredPosts.map((post) => (
						<tr key={ post.id }>
							<td className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">{ post.id }</td>
							<td className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">{ post.title }</td>
							<td className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">{ post.status_name }</td>
						</tr>
					)) }
				</tbody>
			</table>
		</div>
	);
};

export default PostListPage;
