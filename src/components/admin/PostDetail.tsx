import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiFetch } from '@/utilities/apiFetch';
import { Kotha } from '@/types/models';
import { ApiResponse } from '@/hooks/useCustomForm';

const PostDetail = () => {
	const { id } = useParams<{ id: string }>();
	const [post, setPost] = useState<Kotha | null>(null);
	const [loading, setLoading] = useState(true);

	const fetchPostDetails = async () => {
		try {
			const response = await apiFetch<ApiResponse<Kotha>>(`api/kotha/${id}`);
			setPost(response.data);
		} catch (error) {
			console.error('Failed to fetch post details', error);
		} finally {
			setLoading(false);
		}
	};

	const approvePost = async () => {
		try {
			await apiFetch(`api/admin/kotha/${id}/approve`, { method: 'POST' });
			alert('Post approved successfully!');
			fetchPostDetails(); // Refresh post details
		} catch (error) {
			console.error('Failed to approve post', error);
		}
	};

	useEffect(() => {
		fetchPostDetails();
	}, [id]);

	if (loading) return <div>Loading...</div>;

	if (!post) return <div>Post not found</div>;

	return (
		<div className="tw-container tw-mx-auto tw-px-4">
			<h2 className="tw-text-2xl">{ post.title }</h2>
			<p>{ post.description }</p>
			<div className="tw-grid tw-grid-cols-3 tw-gap-4">
				{ post.images.map(image => (
					<img key={ image.id } src={ image.image_url } alt={ post.title } className="tw-w-full tw-h-auto" />
				)) }
			</div>
			<button onClick={ approvePost } className="tw-mt-4 tw-px-4 tw-py-2 tw-bg-green-500 tw-text-white tw-rounded">
				Approve
			</button>
		</div>
	);
};

export default PostDetail;
