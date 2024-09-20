import React, { useState } from 'react';

// Example posts data
const posts = [
	{ id: 1, title: 'Post 1', status: 'pending' },
	{ id: 2, title: 'Post 2', status: 'approved' },
	{ id: 3, title: 'Post 3', status: 'rejected' },
	{ id: 4, title: 'Post 4', status: 'pending' },
	// Add more posts here...
];

const PostListPage = () => {
	const [statusFilter, setStatusFilter] = useState<string | null>(null);

	// Calculate counts for each status
	const pendingCount = posts.filter(post => post.status === 'pending').length;
	const approvedCount = posts.filter(post => post.status === 'approved').length;
	const rejectedCount = posts.filter(post => post.status === 'rejected').length;

	// Filter the posts based on the selected status
	const filteredPosts = statusFilter ? posts.filter(post => post.status === statusFilter) : posts;

	return (
		<div className="tw-container tw-mx-auto tw-px-4">
			{/* Tabs/Chips for filtering */ }
			<div className="tw-flex tw-gap-4 tw-mb-4">
				<button
					onClick={ () => setStatusFilter(null) }
					className="tw-px-4 tw-py-2 tw-bg-gray-200 tw-rounded"
				>
					All
				</button>
				<button
					onClick={ () => setStatusFilter('pending') }
					className="tw-px-4 tw-py-2 tw-bg-yellow-200 tw-rounded"
				>
					Pending ({ pendingCount })
				</button>
				<button
					onClick={ () => setStatusFilter('approved') }
					className="tw-px-4 tw-py-2 tw-bg-green-200 tw-rounded"
				>
					Approved ({ approvedCount })
				</button>
				<button
					onClick={ () => setStatusFilter('rejected') }
					className="tw-px-4 tw-py-2 tw-bg-red-200 tw-rounded"
				>
					Rejected ({ rejectedCount })
				</button>
			</div>

			{/* Posts table */ }
			<table className="tw-table-auto tw-w-full tw-border-collapse tw-border tw-border-gray-200">
				<thead>
					<tr>
						<th className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">ID</th>
						<th className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">Title</th>
						<th className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">Status</th>
					</tr>
				</thead>
				<tbody>
					{ filteredPosts.map(post => (
						<tr key={ post.id }>
							<td className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">{ post.id }</td>
							<td className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">{ post.title }</td>
							<td className="tw-border tw-border-gray-300 tw-px-4 tw-py-2">{ post.status }</td>
						</tr>
					)) }
				</tbody>
			</table>
		</div>
	);
};

export default PostListPage;
