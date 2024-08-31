// import { ApiResponse } from "@/types/commonTypes"
// import { Kotha } from "@/types/models"
// import { apiFetch } from "@/utilities/apiFetch"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import Slider from "react-slick";

// const settings = {
// 	customPaging: function (i) {
// 		return (
// 			<div className="small-thumb-img">
// 				<img src="/assets/images/product/product-thumb/thumb-16.png" alt="small-thumb" />
// 			</div>
// 		);
// 	},
// 	dots: true,
// 	dotsClass: "slick-dots slick-thumb",
// 	infinite: true,
// 	speed: 500,
// 	slidesToShow: 1,
// 	slidesToScroll: 1
// };

// const getKothaDetail = async (id: number): Promise<ApiResponse<Kotha>> => {
// 	return await apiFetch(`api/kotha/${id}`)
// }

// const KothaDetailPage = () => {
// 	const { id } = useParams()
// 	const [kotha, setKotha] = useState<Kotha | null>(null)

// 	useEffect(() => {
// 		const kothaId = Number(id)
// 		getKothaDetail(kothaId)
// 			.then((response) => {
// 				setKotha(response.data)
// 			})
// 	}, [id])

// 	if (!kotha) {
// 		return <div>Loading...</div>
// 	}

// 	return (
// 		<>
// 			<main className="main-wrapper">
// 				<div className="axil-single-product-area bg-color-white">
// 					<div className="single-product-thumb axil-section-gapcommon single-product-modern">
// 						<div className="container">
// 							<div className="row row--20">
// 								<div className="col-lg-6 mb--40">
// 									<div className="row">
// 										<Slider { ...settings }>
// 											<div className="thumbnail">
// 												<img src="/assets/images/product/product-big-16.png" alt="Product Images" />
// 											</div>
// 											<div className="thumbnail">
// 												<img src="/assets/images/product/product-big-16.png" alt="Product Images" />
// 											</div>
// 											<div className="thumbnail">
// 												<img src="/assets/images/product/product-big-16.png" alt="Product Images" />
// 											</div>
// 											<div className="thumbnail">
// 												<img src="/assets/images/product/product-big-16.png" alt="Product Images" />
// 											</div>
// 											<div className="thumbnail">
// 												<img src="/assets/images/product/product-big-16.png" alt="Product Images" />
// 											</div>
// 											<div className="thumbnail">
// 												<img src="/assets/images/product/product-big-16.png" alt="Product Images" />
// 											</div>
// 										</Slider>
// 									</div>
// 									{/* <div className="row">
// 										<div className="col-lg-12">
// 											<div className="product-large-thumbnail-4 single-product-thumbnail axil-product">
// 												<div className="thumbnail">
// 													<img src="/assets/images/product/product-big-16.png" alt="Product Images" />
// 												</div>
// 												<div className="thumbnail">
// 													<img src="/assets/images/product/product-big-16.png" alt="Product Images" />
// 												</div>
// 												<div className="thumbnail">
// 													<img src="/assets/images/product/product-big-16.png" alt="Product Images" />
// 												</div>
// 												<div className="thumbnail">
// 													<img src="/assets/images/product/product-big-16.png" alt="Product Images" />
// 												</div>
// 												<div className="thumbnail">
// 													<img src="/assets/images/product/product-big-16.png" alt="Product Images" />
// 												</div>
// 												<div className="thumbnail">
// 													<img src="/assets/images/product/product-big-16.png" alt="Product Images" />
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-lg-12">
// 											<div className="small-thumb-wrapper product-small-thumb-4 slick-layout-wrapper--10 axil-slick-arrow arrow-both-side">
// 												<div className="small-thumb-img">
// 													<img src="/assets/images/product/product-thumb/thumb-16.png" alt="samll-thumb" />
// 												</div>
// 												<div className="small-thumb-img">
// 													<img src="/assets/images/product/product-thumb/thumb-17.png" alt="samll-thumb" />
// 												</div>
// 												<div className="small-thumb-img active">
// 													<img src="/assets/images/product/product-thumb/thumb-18.png" alt="samll-thumb" />
// 												</div>
// 												<div className="small-thumb-img">
// 													<img src="/assets/images/product/product-thumb/thumb-19.png" alt="samll-thumb" />
// 												</div>
// 												<div className="small-thumb-img">
// 													<img src="/assets/images/product/product-thumb/thumb-20.png" alt="samll-thumb" />
// 												</div>
// 												<div className="small-thumb-img">
// 													<img src="/assets/images/product/product-thumb/thumb-16.png" alt="samll-thumb" />
// 												</div>
// 											</div>
// 										</div>
// 									</div> */}
// 								</div>
// 								<div className="col-lg-6 mb--40">
// 									<div className="single-product-content">
// 										<div className="inner">
// 											<h2 className="product-title">{ kotha.title }</h2>
// 											<span className="price-amount">{ kotha.price }</span>

// 											<ul className="description">
// 												<li>{ kotha.description }</li>
// 											</ul>
// 											<div className="product-variations-wrapper">

// 											</div>

// 											<div className="product-action-wrapper">

// 												<ul className="product-action d-flex-center mb--0">
// 													<li className="add-to-cart"><a href="checkout.html" className="axil-btn btn-bg-secondary"><i className="far fa-shopping-bag"></i> Buy Now</a></li>
// 													<li className="add-to-cart"><a href="cart.html" className="axil-btn btn-bg-primary"><i className="far fa-shopping-cart"></i> Add to Cart</a></li>
// 												</ul>

// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="woocommerce-tabs wc-tabs-wrapper bg-lighter wc-tab-style-two">
// 						<div className="container">
// 							<div className="section-title-wrapper section-title-border">
// 								<h2 className="title">Map</h2>
// 							</div>
// 							<div className="tabs-wrap">
// 								<ul className="nav tabs" id="myTab" role="tablist">
// 									<li className="nav-item" role="presentation">
// 										<a className="active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Specifications</a>
// 									</li>
// 								</ul>
// 								<div className="tab-content" id="myTabContent">
// 									<div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
// 										<div className="product-desc-wrapper">
// 											<div className="single-desc">
// 												<h5 className="title">Key feature</h5>
// 												<div className="row">
// 													<div className="col-lg-6">
// 														<ul>
// 															<li>6.1-inch Super Retina XDR display1</li>
// 															<li>Advanced camera system for better photos in any light</li>
// 															<li>Cinematic mode now in 4K Dolby Vision up to 30 fps</li>
// 															<li>A15 Bionic chip with 5-core GPU for lightning-fast performance.
// 																Superfast 5G cellular4</li>
// 															<li>Vital safety features Emergency SOS via satellite2 and Crash
// 																Detection</li>
// 														</ul>
// 													</div>
// 													<div className="col-lg-6">
// 														<ul>
// 															<li>Action mode for smooth, steady, handheld videos </li>
// 															<li>All-day battery life and up to 20 hours of video playback3</li>
// 															<li>Industry-leading durability features with Ceramic Shield and
// 																water resistance5</li>
// 															<li>iOS 16 offers even more ways to personalize, communicate, and
// 																share6</li>
// 														</ul>
// 													</div>
// 												</div>

// 											</div>
// 										</div>
// 									</div>
// 									<div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
// 										<div className="reviews-wrapper">
// 											<div className="row">
// 												<div className="col-lg-6 mb--40">
// 													<div className="axil-comment-area pro-desc-commnet-area">
// 														<h5 className="title">Review for this product</h5>
// 														<ul className="comment-list">
// 															<li className="comment">
// 																<div className="comment-body">
// 																	<div className="single-comment">
// 																		<div className="comment-img">
// 																			<img src=".//assets/images/blog/author-image-4.png" alt="Author Images" />
// 																		</div>
// 																		<div className="comment-inner">
// 																			<h6 className="commenter">
// 																				<a className="hover-flip-item-wrapper" href="#">
// 																					<span className="hover-flip-item">
// 																						<span
// 																							data-text="Cameron Williamson">Eleanor
// 																							Pena</span>
// 																					</span>
// 																				</a>
// 																				<span
// 																					className="commenter-rating ratiing-four-star">
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																					<a href="#"><i
// 																						className="fas fa-star empty-rating"></i></a>
// 																				</span>
// 																			</h6>
// 																			<div className="comment-text">
// 																				<p>“We’ve created a full-stack structure for our
// 																					working workflow processes, were from the
// 																					funny the century initial all the made, have
// 																					spare to negatives. ” </p>
// 																			</div>
// 																		</div>
// 																	</div>
// 																</div>
// 															</li>

// 															<li className="comment">
// 																<div className="comment-body">
// 																	<div className="single-comment">
// 																		<div className="comment-img">
// 																			<img src=".//assets/images/blog/author-image-4.png" alt="Author Images" />
// 																		</div>
// 																		<div className="comment-inner">
// 																			<h6 className="commenter">
// 																				<a className="hover-flip-item-wrapper" href="#">
// 																					<span className="hover-flip-item">
// 																						<span data-text="Rahabi Khan">Courtney
// 																							Henry</span>
// 																					</span>
// 																				</a>
// 																				<span
// 																					className="commenter-rating ratiing-four-star">
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																				</span>
// 																			</h6>
// 																			<div className="comment-text">
// 																				<p>“We’ve created a full-stack structure for our
// 																					working workflow processes, were from the
// 																					funny the century initial all the made, have
// 																					spare to negatives. ”</p>
// 																			</div>
// 																		</div>
// 																	</div>
// 																</div>
// 															</li>

// 															<li className="comment">
// 																<div className="comment-body">
// 																	<div className="single-comment">
// 																		<div className="comment-img">
// 																			<img src=".//assets/images/blog/author-image-5.png" alt="Author Images" />
// 																		</div>
// 																		<div className="comment-inner">
// 																			<h6 className="commenter">
// 																				<a className="hover-flip-item-wrapper" href="#">
// 																					<span className="hover-flip-item">
// 																						<span data-text="Rahabi Khan">Devon
// 																							Lane</span>
// 																					</span>
// 																				</a>
// 																				<span
// 																					className="commenter-rating ratiing-four-star">
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																					<a href="#"><i className="fas fa-star"></i></a>
// 																				</span>
// 																			</h6>
// 																			<div className="comment-text">
// 																				<p>“We’ve created a full-stack structure for our
// 																					working workflow processes, were from the
// 																					funny the century initial all the made, have
// 																					spare to negatives. ” </p>
// 																			</div>
// 																		</div>
// 																	</div>
// 																</div>
// 															</li>
// 														</ul>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>

// 						</div>
// 					</div>

// 				</div>

// 			</main>

// 		</>
// 	)
// }

// export default KothaDetailPage


import { ApiResponse } from "@/types/commonTypes"
import { Kotha } from "@/types/models"
import { apiFetch } from "@/utilities/apiFetch"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const getKothaDetail = async (id: number): Promise<ApiResponse<Kotha>> => {
	return await apiFetch(`api/kotha/${id}`)
}

const KothaDetailPage = () => {
	const { id } = useParams()
	const [kotha, setKotha] = useState<Kotha | null>(null)

	useEffect(() => {
		const kothaId = Number(id)
		getKothaDetail(kothaId)
			.then((response) => {
				setKotha(response.data)
			})
	}, [id])

	if (!kotha) {
		return <div>Loading...</div>
	}


	return (
		<div>
			<main className="main-wrapper">
				<div className="axil-single-product-area bg-color-white">
					<div className="single-product-thumb tw-py-8">
						<div className="container">
							<div className="row row--50">
								<div className="col-lg-6 mb--40">
									<div className="h-100">
										<div className="position-sticky sticky-top">
											<div className="single-product-thumbnail axil-product">
												<div className="thumbnail">
													<img src={ `${import.meta.env.VITE_BASE_URL}/storage/${kotha.images[0].image_url}` }
														alt={ kotha.title } />

												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 mb--40">
									<div className="h-100">
										<div className="position-sticky sticky-top">
											<div className="single-product-content nft-single-product-content">
												<div className="inner">
													<h2 className="product-title tw-text-5xl tw-font-semibold">{ kotha.title }</h2>
													<div className="price-amount price-offer-amount">
														<span className="price current-price">Rs. { kotha.price }</span>
													</div>

													<div className="woocommerce-tabs wc-tabs-wrapper bg-vista-white nft-info-tabs">
														<div className="container">
															<ul className="nav tabs" id="myTab" role="tablist">
																<li className="nav-item" role="presentation">
																	<a className="active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
																</li>
																<li className="nav-item " role="presentation">
																	<a id="additional-info-tab" data-bs-toggle="tab" href="#additional-info" role="tab" aria-controls="additional-info" aria-selected="false">Additional Information</a>
																</li>
																<li className="nav-item" role="presentation">
																	<a id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Property</a>
																</li>
															</ul>
															<div className="tab-content" id="myTabContent">
																<div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
																	<div className="product-additional-info">
																		<p className="mb--15"><strong>About kotha</strong></p>
																		<p>{ kotha.description }</p>
																		<div className="table-responsive">
																			<table>
																				<tbody>
																					<tr>
																						<th>Contract Address</th>
																						<td>0xd4fio...se520</td>
																					</tr>
																					<tr>
																						<th>Token ID</th>
																						<td>420</td>
																					</tr>
																					<tr>
																						<th>Token Standard</th>
																						<td>Bna-420</td>
																					</tr>
																					<tr>
																						<th>Blockchain</th>
																						<td>Ethereum</td>
																					</tr>
																				</tbody>
																			</table>
																		</div>
																	</div>
																</div>
																<div className="tab-pane fade" id="additional-info" role="tabpanel" aria-labelledby="additional-info-tab">
																	<div className="product-additional-info">
																		<div className="table-responsive">
																			<table>
																				<tbody>
																					<tr>
																						<th>Brand</th>
																						<td>eTrade</td>
																					</tr>
																					<tr>
																						<th>Collection </th>
																						<td>eTrade Capsules</td>
																					</tr>
																					<tr>
																						<th>Creator</th>
																						<td>Arnold Ray</td>
																					</tr>
																					<tr>
																						<th>Gen</th>
																						<td>1</td>
																					</tr>
																					<tr>
																						<th>Rarity </th>
																						<td>Epic</td>
																					</tr>
																					<tr>
																						<th>Type</th>
																						<td>Digital Art</td>
																					</tr>
																				</tbody>
																			</table>
																		</div>
																	</div>
																</div>
																<div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
																	<div className="product-additional-info">
																		<div className="table-responsive">
																			<table>
																				<tbody>
																					<tr>
																						<th>Brand</th>
																						<td>eTrade</td>
																					</tr>
																					<tr>
																						<th>Collection </th>
																						<td>eTrade Capsules</td>
																					</tr>
																					<tr>
																						<th>Creator</th>
																						<td>Arnold Ray</td>
																					</tr>
																					<tr>
																						<th>Gen</th>
																						<td>1</td>
																					</tr>
																					<tr>
																						<th>Rarity </th>
																						<td>Epic</td>
																					</tr>
																					<tr>
																						<th>Type</th>
																						<td>Digital Art</td>
																					</tr>
																				</tbody>
																			</table>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default KothaDetailPage