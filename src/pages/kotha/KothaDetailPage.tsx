import { ApiResponse } from "@/types/commonTypes";
import { KothaDetail } from "@/types/models";
import { apiFetch } from "@/utilities/apiFetch";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

const getKothaDetail = async (id: number): Promise<ApiResponse<KothaDetail>> => {
	return await apiFetch(`api/kotha/${id}`);
};

const KothaDetailPage = () => {
	const { id } = useParams();
	const [kotha, setKotha] = useState<KothaDetail | null>(null);

	// Correct typing for nav states and refs
	const [nav1, setNav1] = useState<Slider | null>(null);
	const [nav2, setNav2] = useState<Slider | null>(null);
	const sliderRef1 = useRef<Slider | null>(null);
	const sliderRef2 = useRef<Slider | null>(null);

	useEffect(() => {
		const kothaId = Number(id);
		getKothaDetail(kothaId).then((response) => {
			setKotha(response.data);
			setNav1(sliderRef1.current);
			setNav2(sliderRef2.current);
		});
	}, [id]);

	if (!kotha) {
		return <div>Loading...</div>;
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
												<Slider asNavFor={ nav2 } ref={ sliderRef1 }>
													{ kotha.images.map((image, index) => (
														<div className="thumbnail" key={ index }>
															<img
																src={ `${import.meta.env.VITE_BASE_URL}/storage/${image.image_url}` }
																alt={ kotha.title }
															// className="tw-h-full tw-w-full tw-object-cover"
															/>
														</div>
													)) }
												</Slider>
											</div>
										</div>

										<div className="small-thumb-wrapper slick-layout-wrapper--10 axil-slick-arrow arrow-both-side">
											<Slider
												asNavFor={ nav1 }
												ref={ sliderRef2 }
												slidesToShow={ 3 }
												swipeToSlide={ true }
												focusOnSelect={ true }
											>
												{ kotha.images.map((image, index) => (
													<div className="small-thumb-img" key={ index }>
														<img
															src={ `${import.meta.env.VITE_BASE_URL}/storage/${image.image_url}` }
															alt={ kotha.title }
															className="tw-w-full tw-h-full tw-object-cover"
														/>
													</div>
												)) }
											</Slider>
										</div>
									</div>
								</div>
								<div className="col-lg-6 mb--40">
									<div className="h-100">
										<div className="position-sticky sticky-top">
											<div className="single-product-content nft-single-product-content">
												<div className="inner">
													<h2 className="product-title tw-text-5xl tw-font-semibold">
														{ kotha.title }
													</h2>
													<div className="price-amount price-offer-amount">
														<span className="price current-price">
															Rs. { kotha.price }
														</span>
													</div>

													<div className="woocommerce-tabs wc-tabs-wrapper bg-vista-white nft-info-tabs">
														<div className="container">
															<ul
																className="nav tabs"
																id="myTab"
																role="tablist"
															>
																<li className="nav-item" role="presentation">
																	<a
																		className="active"
																		id="description-tab"
																		data-bs-toggle="tab"
																		href="#description"
																		role="tab"
																		aria-controls="description"
																		aria-selected="true"
																	>
																		Description
																	</a>
																</li>
																<li className="nav-item " role="presentation">
																	<a
																		id="additional-info-tab"
																		data-bs-toggle="tab"
																		href="#additional-info"
																		role="tab"
																		aria-controls="additional-info"
																		aria-selected="false"
																	>
																		Additional Information
																	</a>
																</li>
																<li className="nav-item" role="presentation">
																	<a
																		id="reviews-tab"
																		data-bs-toggle="tab"
																		href="#reviews"
																		role="tab"
																		aria-controls="reviews"
																		aria-selected="false"
																	>
																		Contact
																	</a>
																</li>
															</ul>
															<div className="tab-content" id="myTabContent">
																<div
																	className="tab-pane fade show active"
																	id="description"
																	role="tabpanel"
																	aria-labelledby="description-tab"
																>
																	<div className="product-additional-info">
																		<p className="mb--15">
																			<strong>About kotha</strong>
																		</p>
																		<p>{ kotha.description }</p>
																		<div className="table-responsive">
																			<table>
																				<tbody>
																					<tr>
																						<th>Type</th>
																						<td>{ kotha.category.name }</td>
																					</tr>
																					<tr>
																						<th>Purpose</th>
																						<td className="tw-capitalize">{ kotha.purpose }</td>
																					</tr>
																					<tr>
																						<th>Negotiable</th>
																						<td>{ kotha.negotiable }</td>
																					</tr>

																				</tbody>
																			</table>
																		</div>
																	</div>
																</div>
																<div
																	className="tab-pane fade"
																	id="additional-info"
																	role="tabpanel"
																	aria-labelledby="additional-info-tab"
																>
																	<div className="product-additional-info">
																		<div className="table-responsive">
																			<table>
																				<tbody>
																					<tr>
																						<th>Bathroom </th>
																						<td>{ kotha.facility.bathroom }</td>
																					</tr>

																					<tr>
																						<th>Bed Room</th>
																						<td>{ kotha.facility.bed_room }</td>
																					</tr>
																					<tr>
																						<th>Kitchen</th>
																						<td>{ kotha.facility.kitchen }</td>
																					</tr>
																					<tr>
																						<th>Parking </th>
																						<td>{ kotha.facility.parking }</td>
																					</tr>
																					<tr>
																						<th>Water Facility</th>
																						<td>{ kotha.facility.water_facility }</td>
																					</tr>
																					<tr>
																						<th>Floor</th>
																						<td className="tw-capitalize">{ kotha.facility.rental_floor_name }</td>
																					</tr>
																					<tr>
																						<th>Balcony</th>
																						<td>{ kotha.facility.balcony }</td>
																					</tr>
																				</tbody>
																			</table>
																		</div>
																	</div>
																</div>
																<div
																	className="tab-pane fade"
																	id="reviews"
																	role="tabpanel"
																	aria-labelledby="reviews-tab"
																>
																	<div className="product-additional-info">
																		<div className="table-responsive">
																			<table>
																				<tbody>
																					<tr>
																						<th>Number</th>
																						<td>{ kotha.contact.number }</td>
																					</tr>
																					<tr>
																						<th>Alternative Number</th>
																						<td>{ kotha.contact.alternative_number }</td>
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
	);
};

export default KothaDetailPage;
