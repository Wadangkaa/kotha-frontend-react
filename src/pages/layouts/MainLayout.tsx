import SidebarFilter from "@/components/SidebarFilter"
import { setAuth } from "@/redux/slices/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom"

const MainLayout = () => {
	const dispatch = useDispatch()
	const authStore = useSelector(state => state.auth)

	useEffect(() => {
		const authUser = localStorage.getItem("user");
		const token = localStorage.getItem("token");

		if (authUser && !authStore.user) {
			dispatch(setAuth({ user: authUser, token: token }));
		}
	}, [authStore.user, dispatch]);

	const openMyAccountDropdown = () => {
		const dropdown = document.getElementById("my-account-dropdown");
		if (dropdown) {
			dropdown.classList.toggle("open");
		} else {
			console.error('Element with id "my-account-dropdown" not found');
		}
	};

	return (
		<>
			<div>
				<div className="sticky-header overflow-md-visible">

					<a href="#top" className="back-to-top" id="backto-top"><i className="fal fa-arrow-up"></i></a>

					<header className="header axil-header header-style-7">

						<div id="axil-sticky-placeholder"></div>
						<div className="axil-mainmenu">
							<div className="container-fluid">
								<div className="header-navbar">
									<div className="header-brand">
										<NavLink to="/" className="logo logo-dark">
											<img src="/assets/images/logo/kotha-horizontal.png" alt="Site Logo" className="tw-h-[50px]" />
										</NavLink>
										<NavLink to="/" className="logo logo-light">
											<img src="assets/images/logo/logo-light.png" alt="Site Logo" />
										</NavLink>
									</div>
									<div className="header-main-nav">
										<nav className="mainmenu-nav">
											<button className="mobile-close-btn mobile-nav-toggler"><i className="fas fa-times"></i></button>
											<div className="mobile-nav-brand">
												<NavLink to="/" className="logo">
													<img src="/assets/images/logo/logo.png" alt="Site Logo" />
												</NavLink>
											</div>
											<ul className="mainmenu">
												{/* <li>
													<a href="shop.html"><i className="far fa-bags-shopping"></i> Shop</a>
												</li>
												<li>
													<a href="shop-sidebar.html"><i className="far fa-badge-percent"></i>Deals</a>
												</li>
												<li>
													<a href="contact.html"><i className="far fa-headset"></i>Support</a>
												</li> */}
											</ul>
										</nav>
									</div>
									<div className="header-action">
										<ul className="action-list">
											{/* <li className="axil-search d-none-laptop">
												<input type="search" className="placeholder product-search-input" name="search2" id="search2" maxLength={ 128 } placeholder="Search" autoComplete="off" />
												<button type="submit" className="icon wooc-btn-search">
													<i className="far fa-search"></i>
												</button>
											</li> */}

											<NavLink to={ `/search-in-map` }>
												Search room in map
											</NavLink>
											<li className="shopping-cart">
												<a href="#" className="cart-dropdown-btn">
													<span className="cart-count">2</span>
													<i className="far fa-filter"></i>
												</a>
											</li>

											<li className="my-account" onClick={ openMyAccountDropdown }>
												<a href="#">
													<i className="far fa-user"></i>
												</a>
												<div className="my-account-dropdown" id="my-account-dropdown">
													{ authStore.isAuthenticated ? (
														<>
															<ul>
																<li>
																	<NavLink to="/account">My Account</NavLink>
																</li>
															</ul>
															<div className="login-btn">
																<NavLink to="/logout" className="axil-btn btn-bg-primary">Logout</NavLink>
															</div>
														</>
													) : (
														<>
															<div className="login-btn">
																<NavLink to="/login" className="axil-btn btn-bg-primary">Login</NavLink>
															</div>
															<div className="reg-footer text-center">No account yet? <NavLink to="/register" className="btn-link">REGISTER HERE.</NavLink></div>
														</>
													) }
												</div>
											</li>
											<li className="axil-mobile-toggle">
												<button className="menu-btn mobile-nav-toggler">
													<i className="flaticon-menu-2"></i>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

					</header>


					<Outlet />


					<footer className="axil-footer-area footer-style-3 footer-dark">

						<div className="footer-top">
							<div className="container">
								<div className="footer-widget-warp">
									<div className="row">
										<div className="col-lg-4">
											<div className="axil-footer-widget footer-widget-newsletter">
												<h4 className="widget-title">Stay Up To Date</h4>
												<p>Subscribe to our newsletter</p>
												<div className="input-group">
													<input type="text" className="form-control" placeholder="Enter Your Email" />
													<button className="submit-btn" type="button">SUBSCRIBE</button>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="axil-footer-widget widget-flex">
												<h6 className="widget-title">kotha</h6>
												<div className="inner">
													<ul>
														<li><a href="about-us.html">About Us</a></li>
														<li><a href="#">Delivery</a></li>
														<li><a href="about-us.html">Information</a></li>
														<li><a href="privacy-policy.html">Privacy Policy</a></li>
														<li><a href="terms-of-service.html">Terms & Conditions</a></li>
														<li><a href="contact.html">Support Center</a></li>
														<li><a href="contact.html">Contact Us</a></li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="axil-footer-widget widget-flex">
												<h6 className="widget-title">Company</h6>
												<div className="inner">
													<ul>
														<li><a href="about-us.html">About Us</a></li>
														<li><a href="#">Delivery</a></li>
														<li><a href="about-us.html">Information</a></li>
														<li><a href="privacy-policy.html">Privacy Policy</a></li>
														<li><a href="terms-of-service.html">Terms & Conditions</a></li>
														<li><a href="contact.html">Support Center</a></li>
														<li><a href="contact.html">Contact Us</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="copyright-area copyright-default">
							<div className="container">
								<div className="copyright-left d-flex flex-wrap justify-content-center">
									<ul className="quick-link">
										<li>© 2024. All rights reserved by David Chamling Rai.</li>
									</ul>
								</div>
							</div>
						</div>

					</footer>



					<div className="modal fade quick-view-product" id="quick-view-modal" tabIndex={ -1 } aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times"></i></button>
								</div>
								<div className="modal-body">
									<div className="single-product-thumb">
										<div className="row">
											<div className="col-lg-7 mb--40">
												<div className="row">
													<div className="col-lg-10 order-lg-2">
														<div className="single-product-thumbnail product-large-thumbnail axil-product thumbnail-badge zoom-gallery">
															<div className="thumbnail">
																<img src="assets/images/product/product-big-01.png" alt="Product Images" />
																<div className="label-block label-right">
																	<div className="product-badget">20% OFF</div>
																</div>
																<div className="product-quick-view position-view">
																	<a href="assets/images/product/product-big-01.png" className="popup-zoom">
																		<i className="far fa-search-plus"></i>
																	</a>
																</div>
															</div>
															<div className="thumbnail">
																<img src="assets/images/product/product-big-02.png" alt="Product Images" />
																<div className="label-block label-right">
																	<div className="product-badget">20% OFF</div>
																</div>
																<div className="product-quick-view position-view">
																	<a href="assets/images/product/product-big-02.png" className="popup-zoom">
																		<i className="far fa-search-plus"></i>
																	</a>
																</div>
															</div>
															<div className="thumbnail">
																<img src="assets/images/product/product-big-03.png" alt="Product Images" />
																<div className="label-block label-right">
																	<div className="product-badget">20% OFF</div>
																</div>
																<div className="product-quick-view position-view">
																	<a href="assets/images/product/product-big-03.png" className="popup-zoom">
																		<i className="far fa-search-plus"></i>
																	</a>
																</div>
															</div>
														</div>
													</div>
													<div className="col-lg-2 order-lg-1">
														<div className="product-small-thumb small-thumb-wrapper">
															<div className="small-thumb-img">
																<img src="assets/images/product/product-thumb/thumb-08.png" alt="thumb image" />
															</div>
															<div className="small-thumb-img">
																<img src="assets/images/product/product-thumb/thumb-07.png" alt="thumb image" />
															</div>
															<div className="small-thumb-img">
																<img src="assets/images/product/product-thumb/thumb-09.png" alt="thumb image" />
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-5 mb--40">
												<div className="single-product-content">
													<div className="inner">
														<div className="product-rating">
															<div className="star-rating">
																<img src="assets/images/icons/rate.png" alt="Rate Images" />
															</div>
															<div className="review-link">
																<a href="#">(<span>1</span> customer reviews)</a>
															</div>
														</div>
														<h3 className="product-title">Serif Coffee Table</h3>
														<span className="price-amount">$155.00 - $255.00</span>
														<ul className="product-meta">
															<li><i className="fal fa-check"></i>In stock</li>
															<li><i className="fal fa-check"></i>Free delivery available</li>
															<li><i className="fal fa-check"></i>Sales 30% Off Use Code: MOTIVE30</li>
														</ul>
														<p className="description">In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.</p>

														<div className="product-variations-wrapper">


															<div className="product-variation">
																<h6 className="title">Colors:</h6>
																<div className="color-variant-wrapper">
																	<ul className="color-variant mt--0">
																		<li className="color-extra-01 active"><span><span className="color"></span></span>
																		</li>
																		<li className="color-extra-02"><span><span className="color"></span></span>
																		</li>
																		<li className="color-extra-03"><span><span className="color"></span></span>
																		</li>
																	</ul>
																</div>
															</div>



															<div className="product-variation">
																<h6 className="title">Size:</h6>
																<ul className="range-variant">
																	<li>xs</li>
																	<li>s</li>
																	<li>m</li>
																	<li>l</li>
																	<li>xl</li>
																</ul>
															</div>


														</div>


														<div className="product-action-wrapper d-flex-center">

															<div className="pro-qty"><input type="text" /></div>



															<ul className="product-action d-flex-center mb--0">
																<li className="add-to-cart"><a href="cart.html" className="axil-btn btn-bg-primary">Add to Cart</a></li>
																<li className="wishlist"><a href="wishlist.html" className="axil-btn wishlist-btn"><i className="far fa-heart"></i></a></li>
															</ul>


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

					<div className="cart-dropdown" id="cart-dropdown">
						<SidebarFilter />
					</div>

				</div>
			</div>
		</>
	)
}

export default MainLayout