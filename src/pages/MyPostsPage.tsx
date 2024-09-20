import { ApiResponseWithPagination } from "@/types/commonTypes"
import { Kotha } from "@/types/models"
import { apiFetch } from "@/utilities/apiFetch"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "sonner"

const MyPostsPage = () => {
	const [posts, setPosts] = useState<Kotha[]>([])

	const fetchSelfPosts = async () => {
		const response = await apiFetch<ApiResponseWithPagination<Kotha[]>>('api/kotha/self/all')

		setPosts(response.data.data)
	}

	const deletePost = async (kotha: Kotha) => {
		alert('deleting')
		await apiFetch(`api/kotha/${kotha.id}`, { method: 'DELETE' })
		toast.success('kotha deleted successfully')
		fetchSelfPosts()
	}

	useEffect(() => {
		fetchSelfPosts()
	}, [])

	return (
		<>
			<div className="axil-dashboard-order">
				<div className="table-responsive">
					<table className="table">
						<thead>
							<tr>
								<th scope="col"></th>
								<th scope="col">Purpose</th>
								<th scope="col">Type</th>
								<th scope="col">District</th>
								<th scope="col">Actions</th>
							</tr>
						</thead>
						<tbody>
							{ posts.length <= 0 ? (
								<tr className="tw-flex tw-justify-center">
									<td>
										<span className="tw-text-3xl">No post found</span>
									</td>
								</tr>
							) : (
								posts.map((kotha: Kotha, index) => (
									<tr>
										<th scope="row">
											<div className="tw-h-[80px] tw-w-[120px]">
												<img className="main-img tw-w-full tw-h-full tw-object-cover tw-rounded-[6px]"
													src={ `${import.meta.env.VITE_BASE_URL}/storage/${kotha.images[0]?.image_url}` }
													alt={ kotha.title } />
											</div>
										</th>
										<td>{ kotha.purpose }</td>
										<td>{ kotha.category.name }</td>
										<td>{ kotha.district.name }</td>
										<td className="tw-flex tw-gap-2">
											<NavLink to={ `/details/${kotha.id}` } className="axil-btn view-btn">View</NavLink>
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<div className="axil-btn view-btn tw-rounded-xl tw-flex tw-items-center"><i className="fa-solid fa-trash"></i></div>
												</AlertDialogTrigger>
												<AlertDialogContent>
													<AlertDialogHeader>
														<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
														<AlertDialogDescription>
															This action cannot be undone. This will permanently delete your
															account and remove your data from our servers.
														</AlertDialogDescription>
													</AlertDialogHeader>
													<AlertDialogFooter>
														<AlertDialogCancel>Cancel</AlertDialogCancel>
														<AlertDialogAction onClick={ () => deletePost(kotha) }>Continue</AlertDialogAction>
													</AlertDialogFooter>
												</AlertDialogContent>
											</AlertDialog>

										</td>
									</tr>
								))
							) }
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default MyPostsPage
