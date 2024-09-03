import { Outlet } from "react-router-dom"

const MainLayout = () => {
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
										<a href="/" className="logo logo-dark">
											<img src="/assets/images/logo/kotha-horizontal.png" alt="Site Logo" className="tw-h-[50px]" />
										</a>
										<a href="index.html" className="logo logo-light">
											<img src="assets/images/logo/logo-light.png" alt="Site Logo" />
										</a>
									</div>
									<div className="header-main-nav">
										<nav className="mainmenu-nav">
											<button className="mobile-close-btn mobile-nav-toggler"><i className="fas fa-times"></i></button>
											<div className="mobile-nav-brand">
												<a href="index.html" className="logo">
													<img src="/assets/images/logo/logo.png" alt="Site Logo" />
												</a>
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
											<li className="axil-search d-none-laptop">
												<input type="search" className="placeholder product-search-input" name="search2" id="search2" maxLength={ 128 } placeholder="Search" autoComplete="off" />
												<button type="submit" className="icon wooc-btn-search">
													<i className="far fa-search"></i>
												</button>
											</li>
											<li className="shopping-cart">
												<a href="#" className="cart-dropdown-btn">
													<span className="cart-count">2</span>
													<i className="far fa-filter"></i>
												</a>
											</li>

											<li className="my-account">
												<a href="#">
													<i className="far fa-user"></i>
												</a>
												<div className="my-account-dropdown">
													<span className="title">QUICKLINKS</span>
													<ul>
														<li>
															<a href="my-account.html">My Account</a>
														</li>
														<li>
															<a href="#">Initiate return</a>
														</li>
														<li>
															<a href="#">Support</a>
														</li>
														<li>
															<a href="#">Language</a>
														</li>
													</ul>
													<div className="login-btn">
														<a href="sign-in.html" className="axil-btn btn-bg-primary">Login</a>
													</div>
													<div className="reg-footer text-center">No account yet? <a href="sign-up.html" className="btn-link">REGISTER HERE.</a></div>
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
						{/* <div className="cart-content-wrap">
							<div className="cart-header">
								<h2 className="header-title">Cart review</h2>
								<button className="cart-close sidebar-close"><i className="fas fa-times"></i></button>
							</div>
							<div className="cart-body">
								<ul className="cart-item-list">
									<li className="cart-item">
										<div className="item-img">
											<a href="single-product.html"><img src="assets/images/product/electric/product-01.png" alt="Commodo Blown Lamp" /></a>
											<button className="close-btn"><i className="fas fa-times"></i></button>
										</div>
										<div className="item-content">
											<div className="product-rating">
												<span className="icon">
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
												</span>
												<span className="rating-number">(64)</span>
											</div>
											<h3 className="item-title"><a href="single-product-3.html">Wireless PS Handler</a></h3>
											<div className="item-price"><span className="currency-symbol">$</span>155.00</div>
											<div className="pro-qty item-quantity">
												<input type="number" className="quantity-input" />
											</div>
										</div>
									</li>
									<li className="cart-item">
										<div className="item-img">
											<a href="single-product-2.html"><img src="assets/images/product/electric/product-02.png" alt="Commodo Blown Lamp" /></a>
											<button className="close-btn"><i className="fas fa-times"></i></button>
										</div>
										<div className="item-content">
											<div className="product-rating">
												<span className="icon">
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
												</span>
												<span className="rating-number">(4)</span>
											</div>
											<h3 className="item-title"><a href="single-product-2.html">Gradient Light Keyboard</a></h3>
											<div className="item-price"><span className="currency-symbol">$</span>255.00</div>
											<div className="pro-qty item-quantity">
												<input type="number" className="quantity-input" />
											</div>
										</div>
									</li>
									<li className="cart-item">
										<div className="item-img">
											<a href="single-product-3.html"><img src="assets/images/product/electric/product-03.png" alt="Commodo Blown Lamp" /></a>
											<button className="close-btn"><i className="fas fa-times"></i></button>
										</div>
										<div className="item-content">
											<div className="product-rating">
												<span className="icon">
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
												</span>
												<span className="rating-number">(6)</span>
											</div>
											<h3 className="item-title"><a href="single-product.html">HD CC Camera</a></h3>
											<div className="item-price"><span className="currency-symbol">$</span>200.00</div>
											<div className="pro-qty item-quantity">
												<input type="number" className="quantity-input" />
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="cart-footer">
								<h3 className="cart-subtotal">
									<span className="subtotal-title">Subtotal:</span>
									<span className="subtotal-amount">$610.00</span>
								</h3>
								<div className="group-btn">
									<a href="cart.html" className="axil-btn btn-bg-primary viewcart-btn">View Cart</a>
									<a href="checkout.html" className="axil-btn btn-bg-secondary checkout-btn">Checkout</a>
								</div>
							</div>
						</div> */}
						<div className="col-lg-3 cart-content-wrap">
							<div className="cart-header">
								<h2 className="header-title">Filter kotha</h2>
								<button className="cart-close sidebar-close"><i className="fas fa-times"></i></button>
							</div>
							<div className="axil-shop-sidebar">
								<div className="d-lg-none">
									<button className="sidebar-close filter-close-btn"><i className="fas fa-times"></i></button>
								</div>
								<div className="toggle-list product-categories active">
									<h6 className="title">CATEGORIES</h6>
									<div className="shop-submenu">
										<ul>
											<li className="current-cat"><a href="#">Sun Care</a></li>
											<li><a href="#">Night Care</a></li>
											<li><a href="#">Treatments</a></li>
											<li><a href="#">Moisturizers</a></li>
											<li><a href="#">Eye Care</a></li>
											<li><a href="#">Masks</a></li>
											<li><a href="#">Featured</a></li>
											<li><a href="#">On Sale</a></li>
										</ul>
									</div>
								</div>
								<div className="toggle-list product-categories product-gender active">
									<h6 className="title">GENDER</h6>
									<div className="shop-submenu">
										<ul>
											<li className="chosen"><a href="#">Men (40)</a></li>
											<li><a href="#">Women (56)</a></li>
											<li><a href="#">Unisex (18)</a></li>
										</ul>
									</div>
								</div>
								<div className="toggle-list product-color active">
									<h6 className="title">COLORS</h6>
									<div className="shop-submenu">
										<ul>
											<li className="chosen"><a href="#" className="color-extra-01"></a></li>
											<li><a href="#" className="color-extra-02"></a></li>
											<li><a href="#" className="color-extra-03"></a></li>
											<li><a href="#" className="color-extra-04"></a></li>
											<li><a href="#" className="color-extra-05"></a></li>
											<li><a href="#" className="color-extra-06"></a></li>
											<li><a href="#" className="color-extra-07"></a></li>
											<li><a href="#" className="color-extra-08"></a></li>
											<li><a href="#" className="color-extra-09"></a></li>
											<li><a href="#" className="color-extra-10"></a></li>
											<li><a href="#" className="color-extra-11"></a></li>
										</ul>
									</div>
								</div>

								<div className="toggle-list product-size active">
									<h6 className="title">SIZE</h6>
									<div className="shop-submenu">
										<ul>
											<li className="chosen"><a href="#">XS</a></li>
											<li><a href="#">S</a></li>
											<li><a href="#">M</a></li>
											<li><a href="#">L</a></li>
											<li><a href="#">XL</a></li>
											<li><a href="#">XXL</a></li>
											<li><a href="#">3XL</a></li>
											<li><a href="#">4XL</a></li>
										</ul>
									</div>
								</div>
								<div className="toggle-list product-price-range active">
									<h6 className="title">PRICE</h6>
									<div className="shop-submenu">
										<ul>
											<li className="chosen"><a href="#">30</a></li>
											<li><a href="#">5000</a></li>
										</ul>
										<form action="#" className="mt--25">
											<div id="slider-range"></div>
											<div className="flex-center mt--20">
												<span className="input-range">Price: </span>
												<input type="text" id="amount" className="amount-range" readOnly />
											</div>
										</form>
									</div>
								</div>
								<button className="axil-btn btn-bg-primary">All Reset</button>
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}

export default MainLayout