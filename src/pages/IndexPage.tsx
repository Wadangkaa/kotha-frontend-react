const IndexPage = () => {
	return (
		<div>
			<div className="sticky-header overflow-md-visible">

				<a href="#top" className="back-to-top" id="backto-top"><i className="fal fa-arrow-up"></i></a>

				<header className="header axil-header header-style-7">

					<div id="axil-sticky-placeholder"></div>
					<div className="axil-mainmenu">
						<div className="container-fluid">
							<div className="header-navbar">
								<div className="header-brand">
									<a href="index.html" className="logo logo-dark">
										<img src="assets/images/logo/kotha-horizontal.png" alt="Site Logo" className="tw-h-[50px]" />
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
												<img src="assets/images/logo/logo.png" alt="Site Logo" />
											</a>
										</div>
										<ul className="mainmenu">
											<li>
												<a href="shop.html"><i className="far fa-bags-shopping"></i> Shop</a>
											</li>
											<li>
												<a href="shop-sidebar.html"><i className="far fa-badge-percent"></i>Deals</a>
											</li>
											<li>
												<a href="contact.html"><i className="far fa-headset"></i>Support</a>
											</li>
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
										<li className="axil-search d-none-desktop">
											<a href="#" className="header-search-icon" title="Search">
												<i className="far fa-search"></i>
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


				<main className="main-wrapper">

					<div className="axil-main-slider-area main-slider-style-4">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-md-6">
									<div className="main-slider-content">
										<h1 className="title">Find Your Perfect Home Today.</h1>
										<div className="shop-btn">
											<a href="shop.html" className="axil-btn btn-bg-primary"><i className="far fa-shopping-cart"></i> Check
												it Out!</a>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="slide-thumb-area">
										<div className="main-thumb tw-w-[830px] tw-h-[550px]">
											<img src="assets/images/banner/banner-2.jpg" alt="Women's Product" className="tw-h-full tw-w-full tw-object-cover" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="product-collection-area bg-lighter axil-section-gapcommon">
						<div className="container">
							<div className="section-title-border">
								<h2 className="title">Today’s Best Deals 💥</h2>
								<div className="view-btn"><a href="shop.html">View All Deals</a></div>
							</div>
							<div className="row">
								<div className="col-xl-7">
									<div className="product-collection product-collection-two">
										<div className="collection-content">
											<h3 className="title">Decorative Plant <br /> For Home</h3>
											<div className="price-warp">
												<span className="price-text">Starting From</span>
												<span className="price">$35.00</span>
											</div>
											<div className="shop-btn">
												<a href="shop.html" className="axil-btn btn-bg-primary btn-size-md"><i className="far fa-shopping-cart"></i> View All Items</a>
											</div>
										</div>
										<div className="collection-thumbnail">
											<img src="assets/images/product/collection_5.jpg" alt="Mega Collection" />
										</div>
									</div>
								</div>
								<div className="col-xl-5">
									<div className="row">
										<div className="col-md-6">
											<div className="product-collection-three">
												<div className="collection-content">
													<h6 className="title"><a href="shop.html">Ladies Short Sleeve Dress</a></h6>
													<div className="price-warp">
														<span className="price-text">Starting From</span>
														<span className="price">$30.00</span>
													</div>
												</div>
												<div className="collection-thumbnail">
													<img src="assets/images/product/collection_5.png" alt="Product" />
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="product-collection-three">
												<div className="collection-content">
													<h6 className="title"><a href="shop.html">Oil Soap Wood Home Cleaner</a></h6>
													<div className="price-warp">
														<span className="price-text">Starting From</span>
														<span className="price">$15.22</span>
													</div>
												</div>
												<div className="collection-thumbnail">
													<img src="assets/images/product/collection_6.png" alt="Product" />
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="product-collection-three">
												<div className="collection-content">
													<h6 className="title"><a href="shop.html">Large Pendant Light Ceiling </a></h6>
													<div className="price-warp">
														<span className="price-text">Starting From</span>
														<span className="price">$11.70</span>
													</div>
												</div>
												<div className="collection-thumbnail">
													<img src="assets/images/product/collection_7.png" alt="Product" />
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="product-collection-three">
												<div className="collection-content">
													<h6 className="title"><a href="shop.html">Iphone New Model</a></h6>
													<div className="price-warp">
														<span className="price-text">Starting From</span>
														<span className="price">$499.00</span>
													</div>
												</div>
												<div className="collection-thumbnail">
													<img src="assets/images/product/collection_8.png" alt="Product" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="axil-product-area bg-color-white section-gap-80-35">
						<div className="container">
							<div className="section-title-border">
								<h2 className="title">Explore Our Products 💥</h2>
								<div className="view-btn"><a href="shop.html">View All Products</a></div>
							</div>
							<div className="row">
								<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
									<div className="axil-product product-style-eight">
										<div className="thumbnail">
											<a href="single-product-8.html">
												<img data-sal="zoom-out" data-sal-delay="100" data-sal-duration="800" loading="lazy" className="main-img" src="assets/images/product/fashion/product-26.png" alt="Product Images" />
											</a>
											<div className="label-block label-left">
												<div className="product-badget sale">Sale</div>
											</div>
											<div className="product-hover-action">
												<ul className="cart-action">
													<li className="select-option">
														<a href="single-product-8.html">
															<i className="far fa-shopping-cart"></i> Add to Cart
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="product-content">
											<div className="inner">
												<div className="color-variant-wrapper">
													<ul className="color-variant">
														<li className="color-extra-01 active"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-02"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-03"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-05"><span><span className="color"></span></span>
														</li>
													</ul>
												</div>
												<h5 className="title"><a href="single-product-8.html">Kalrez® Spectrum™ 6375</a></h5>
												<div className="product-rating">
													<span className="icon">
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
													</span>
													<span className="rating-number">6,400</span>
												</div>
												<div className="product-price-variant">
													<span className="price old-price">$30.00</span>
													<span className="price current-price">$17.84</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
									<div className="axil-product product-style-eight">
										<div className="thumbnail">
											<a href="single-product-8.html">
												<img data-sal="zoom-out" data-sal-delay="150" data-sal-duration="800" loading="lazy" className="main-img" src="assets/images/product/fashion/product-27.png" alt="Product Images" />
											</a>
											<div className="label-block label-left">
												<div className="product-badget">20% OFF</div>
											</div>
											<div className="product-hover-action">
												<ul className="cart-action">
													<li className="select-option">
														<a href="single-product-8.html">
															<i className="far fa-shopping-cart"></i> Add to Cart
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="product-content">
											<div className="inner">
												<div className="color-variant-wrapper">
													<ul className="color-variant">
														<li className="color-extra-01 active"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-02"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-03"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-05"><span><span className="color"></span></span>
														</li>
													</ul>
												</div>
												<h5 className="title"><a href="single-product-8.html">Calvin Klein womens Solid Sheath With Chiffon Bell Sleeves Dress</a></h5>
												<div className="product-rating">
													<span className="icon">
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
													</span>
													<span className="rating-number">6,400</span>
												</div>
												<div className="product-price-variant">
													<span className="price old-price">$100.00</span>
													<span className="price current-price">$78.00</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
									<div className="axil-product product-style-eight">
										<div className="thumbnail">
											<a href="single-product-8.html">
												<img data-sal="zoom-out" data-sal-delay="200" data-sal-duration="800" loading="lazy" className="main-img" src="assets/images/product/fashion/product-28.png" alt="Product Images" />
											</a>
											<div className="label-block label-left">
												<div className="product-badget">TOP SELLING</div>
											</div>
											<div className="product-hover-action">
												<ul className="cart-action">
													<li className="select-option">
														<a href="single-product-8.html">
															<i className="far fa-shopping-cart"></i> Add to Cart
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="product-content">
											<div className="inner">
												<div className="color-variant-wrapper">
													<ul className="color-variant">
														<li className="color-extra-01 active"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-02"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-03"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-05"><span><span className="color"></span></span>
														</li>
													</ul>
												</div>
												<h5 className="title"><a href="single-product-8.html">Gildan Men's Ultra Cotton T-Shirt, Style G2000,</a></h5>
												<div className="product-rating">
													<span className="icon">
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
													</span>
													<span className="rating-number">6,400</span>
												</div>
												<div className="product-price-variant">
													<span className="price old-price">$20.00</span>
													<span className="price current-price">$17.00</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
									<div className="axil-product product-style-eight">
										<div className="thumbnail">
											<a href="single-product-8.html">
												<img data-sal="zoom-out" data-sal-delay="250" data-sal-duration="800" loading="lazy" className="main-img" src="assets/images/product/fashion/product-29.png" alt="Product Images" />
											</a>
											<div className="label-block label-left">
												<div className="product-badget sold-out">SOLD OUT</div>
											</div>
											<div className="product-hover-action">
												<ul className="cart-action">
													<li className="select-option">
														<a href="single-product-8.html">
															<i className="far fa-shopping-cart"></i> Add to Cart
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="product-content">
											<div className="inner">
												<div className="color-variant-wrapper">
													<ul className="color-variant">
														<li className="color-extra-01 active"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-02"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-03"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-05"><span><span className="color"></span></span>
														</li>
													</ul>
												</div>
												<h5 className="title"><a href="single-product-8.html">Essentials Men's Regular-Fit Short-Sleeve Crewneck T-Shirt</a></h5>
												<div className="product-rating">
													<span className="icon">
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
													</span>
													<span className="rating-number">6,400</span>
												</div>
												<div className="product-price-variant">
													<span className="price old-price">$12.00</span>
													<span className="price current-price">$5.22</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
									<div className="axil-product product-style-eight">
										<div className="thumbnail">
											<a href="single-product-8.html">
												<img data-sal="zoom-out" data-sal-delay="100" data-sal-duration="800" loading="lazy" className="main-img" src="assets/images/product/fashion/product-30.png" alt="Product Images" />
											</a>
											<div className="product-hover-action">
												<ul className="cart-action">
													<li className="select-option">
														<a href="single-product-8.html">
															<i className="far fa-shopping-cart"></i> Add to Cart
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="product-content">
											<div className="inner">
												<div className="color-variant-wrapper">
													<ul className="color-variant">
														<li className="color-extra-01 active"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-02"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-03"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-05"><span><span className="color"></span></span>
														</li>
													</ul>
												</div>
												<h5 className="title"><a href="single-product-8.html">2.4G Remote Control Rc BB-8 Droid Football Robot</a></h5>
												<div className="product-rating">
													<span className="icon">
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
													</span>
													<span className="rating-number">1,300</span>
												</div>
												<div className="product-price-variant">
													<span className="price current-price">$100.00</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
									<div className="axil-product product-style-eight">
										<div className="thumbnail">
											<a href="single-product-8.html">
												<img data-sal="zoom-out" data-sal-delay="150" data-sal-duration="800" loading="lazy" className="main-img" src="assets/images/product/fashion/product-31.png" alt="Product Images" />
											</a>
											<div className="product-hover-action">
												<ul className="cart-action">
													<li className="select-option">
														<a href="single-product-8.html">
															<i className="far fa-shopping-cart"></i> Add to Cart
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="product-content">
											<div className="inner">
												<div className="color-variant-wrapper">
													<ul className="color-variant">
														<li className="color-extra-01 active"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-02"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-03"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-05"><span><span className="color"></span></span>
														</li>
													</ul>
												</div>
												<h5 className="title"><a href="single-product-8.html">Perfume Nat White Chocolate Flavor WONF (BD-10914)</a></h5>
												<div className="product-rating">
													<span className="icon">
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
													</span>
													<span className="rating-number">2,300</span>
												</div>
												<div className="product-price-variant">
													<span className="price current-price">$14.81</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
									<div className="axil-product product-style-eight">
										<div className="thumbnail">
											<a href="single-product-8.html">
												<img data-sal="zoom-out" data-sal-delay="200" data-sal-duration="800" loading="lazy" className="main-img" src="assets/images/product/fashion/product-32.png" alt="Product Images" />
											</a>
											<div className="product-hover-action">
												<ul className="cart-action">
													<li className="select-option">
														<a href="single-product-8.html">
															<i className="far fa-shopping-cart"></i> Add to Cart
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="product-content">
											<div className="inner">
												<div className="color-variant-wrapper">
													<ul className="color-variant">
														<li className="color-extra-01 active"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-02"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-03"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-05"><span><span className="color"></span></span>
														</li>
													</ul>
												</div>
												<h5 className="title"><a href="single-product-8.html">Women's Winter Mid Length Thick Warm Faux Lamb Wool.</a></h5>
												<div className="product-rating">
													<span className="icon">
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
													</span>
													<span className="rating-number">50</span>
												</div>
												<div className="product-price-variant">
													<span className="price current-price">$59.00</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
									<div className="axil-product product-style-eight">
										<div className="thumbnail">
											<a href="single-product-8.html">
												<img data-sal="zoom-out" data-sal-delay="250" data-sal-duration="800" loading="lazy" className="main-img" src="assets/images/product/fashion/product-33.png" alt="Product Images" />
											</a>
											<div className="product-hover-action">
												<ul className="cart-action">
													<li className="select-option">
														<a href="single-product-8.html">
															<i className="far fa-shopping-cart"></i> Add to Cart
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="product-content">
											<div className="inner">
												<div className="color-variant-wrapper">
													<ul className="color-variant">
														<li className="color-extra-01 active"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-02"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-03"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-04"><span><span className="color"></span></span>
														</li>
														<li className="color-extra-05"><span><span className="color"></span></span>
														</li>
													</ul>
												</div>
												<h5 className="title"><a href="single-product-8.html">Ion8 One Touch Sport / Bike Water Bottle - Leakproof</a></h5>
												<div className="product-rating">
													<span className="icon">
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
														<i className="fas fa-star"></i>
													</span>
													<span className="rating-number">652</span>
												</div>
												<div className="product-price-variant">
													<span className="price current-price">$29.00</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="product-collection-area bg-lighter axil-section-gapcommon">
						<div className="container">
							<div className="section-title-border">
								<h2 className="title">Our Mega Collections 💥</h2>
							</div>
							<div className="row">
								<div className="col-xl-7">
									<div className="product-collection">
										<div className="collection-content">
											<h3 className="title">Explore The <br /> Sunglass</h3>
											<p>The Bouguessa FW21 collection is.</p>
											<div className="price-warp">
												<span className="price-text">Starting From</span>
												<span className="price">$178.00</span>
											</div>
											<div className="shop-btn">
												<a href="shop.html" className="axil-btn btn-bg-primary btn-size-md"><i className="far fa-shopping-cart"></i> SHOP BRAND</a>
											</div>
										</div>
										<div className="collection-thumbnail">
											<img src="assets/images/product/collection_1.jpg" alt="Mega Collection" />
											<div className="label-block label-right">
												<div className="product-badget">Sunglass</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-lg-6">
									<div className="product-collection">
										<div className="collection-content">
											<h3 className="title">Inspire <br /> Creativity</h3>
											<p>The Bouguessa FW21 collection is.</p>
											<div className="price-warp">
												<span className="price-text">Starting From</span>
												<span className="price">$69.00</span>
											</div>
											<div className="shop-btn">
												<a href="shop.html" className="axil-btn btn-bg-primary btn-size-md"><i className="far fa-shopping-cart"></i> SHOP BRAND</a>
											</div>
										</div>
										<div className="collection-thumbnail">
											<img src="assets/images/product/collection_2.jpg" alt="Mega Collection" />
											<div className="label-block label-right">
												<div className="product-badget">Sale</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-lg-6">
									<div className="product-collection">
										<div className="collection-content">
											<h3 className="title">Trade
												<br /> Benifits
											</h3>
											<p>The Bouguessa FW21 collection is.</p>
											<div className="price-warp">
												<span className="price-text">Starting From</span>
												<span className="price">$159.00</span>
											</div>
											<div className="shop-btn">
												<a href="shop.html" className="axil-btn btn-bg-primary btn-size-md"><i className="far fa-shopping-cart"></i> SHOP BRAND</a>
											</div>
										</div>
										<div className="collection-thumbnail">
											<img src="assets/images/product/collection_3.jpg" alt="Mega Collection" />
										</div>
									</div>
								</div>
								<div className="col-xl-7">
									<div className="product-collection">
										<div className="collection-content">
											<h3 className="title">Find A Great
												<br /> Deal
											</h3>
											<p>The Bouguessa FW21 collection is.</p>
											<div className="price-warp">
												<span className="price-text">Starting From</span>
												<span className="price">$299.00</span>
											</div>
											<div className="shop-btn">
												<a href="shop.html" className="axil-btn btn-bg-primary btn-size-md"><i className="far fa-shopping-cart"></i> SHOP BRAND</a>
											</div>
										</div>
										<div className="collection-thumbnail">
											<img src="assets/images/product/collection_4.jpg" alt="Mega Collection" />
											<div className="label-block label-right">
												<div className="product-badget">Jacket</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="sale-banner-area">
						<div className="container">
							<div className="sale-banner-thumb">
								<a href="shop.html"><img src="assets/images/banner/sale_banner.png" alt="Sale Banner" /></a>
							</div>
						</div>
					</div>

					<div className="axil-product-area bg-color-white axil-section-gapcommon">
						<div className="container">
							<div className="section-title-border slider-section-title">
								<h2 className="title">Popular Weekly Deals 💥</h2>
							</div>
							<div className="popular-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-angle angle-top-slide">
								<div className="slick-single-layout">
									<div className="row">
										<div className="col-md-6 col-12">
											<div className="axil-product product-style-eight product-list-style-3">
												<div className="thumbnail">
													<a href="single-product-8.html">
														<img className="main-img" src="assets/images/product/fashion/product-34.png" alt="Product Images" />
													</a>
												</div>
												<div className="product-content">
													<div className="inner">
														<div className="product-cate"><a href="#">KIDS’ DOLLS</a></div>
														<div className="color-variant-wrapper">
															<ul className="color-variant">
																<li className="color-extra-01 active"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-02"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-03"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-05"><span><span className="color"></span></span>
																</li>
															</ul>
														</div>
														<h5 className="title"><a href="single-product-8.html">Manhattan Toy Wee Baby Stella Peach 12" Soft Baby Doll</a></h5>
														<div className="product-rating">
															<span className="icon">
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
															</span>
															<span className="rating-number">1540</span>
														</div>
														<div className="product-price-variant">
															<span className="price-text">Price</span>
															<span className="price current-price">$59.00</span>
														</div>
													</div>
												</div>
												<div className="label-block label-right">
													<div className="product-badget sold-out">SOLD OUT</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-12">
											<div className="axil-product product-style-eight product-list-style-3">
												<div className="thumbnail">
													<a href="single-product-8.html">
														<img className="main-img" src="assets/images/product/fashion/product-35.png" alt="Product Images" />
													</a>
												</div>
												<div className="product-content">
													<div className="inner">
														<div className="product-cate"><a href="#">KIDS’ DOLLS</a></div>
														<div className="color-variant-wrapper">
															<ul className="color-variant">
																<li className="color-extra-01 active"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-02"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-03"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-05"><span><span className="color"></span></span>
																</li>
															</ul>
														</div>
														<h5 className="title"><a href="single-product-8.html">Business Women Suit Set 3 Pieces Notch Lapel Single Breasted Vest </a></h5>
														<div className="product-rating">
															<span className="icon">
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
															</span>
															<span className="rating-number">563</span>
														</div>
														<div className="product-price-variant">
															<span className="price-text">Price</span>
															<span className="price current-price">$99.00</span>
														</div>
													</div>
												</div>
												<div className="label-block label-right">
													<div className="product-badget">TOP SELLING</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-12">
											<div className="axil-product product-style-eight product-list-style-3">
												<div className="thumbnail">
													<a href="single-product-8.html">
														<img className="main-img" src="assets/images/product/fashion/product-36.png" alt="Product Images" />
													</a>
												</div>
												<div className="product-content">
													<div className="inner">
														<div className="product-cate"><a href="#">KIDS’ DOLLS</a></div>
														<div className="color-variant-wrapper">
															<ul className="color-variant">
																<li className="color-extra-01 active"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-02"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-03"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-05"><span><span className="color"></span></span>
																</li>
															</ul>
														</div>
														<h5 className="title"><a href="single-product-8.html">Skechers Men's Energy Afterburn Lace-Up Sneaker</a></h5>
														<div className="product-rating">
															<span className="icon">
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
															</span>
															<span className="rating-number">1,235</span>
														</div>
														<div className="product-price-variant">
															<span className="price-text">Price</span>
															<span className="price current-price">$70.00</span>
														</div>
													</div>
												</div>
												<div className="label-block label-right">
													<div className="product-badget">20% OFF</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-12">
											<div className="axil-product product-style-eight product-list-style-3">
												<div className="thumbnail">
													<a href="single-product-8.html">
														<img className="main-img" src="assets/images/product/fashion/product-37.png" alt="Product Images" />
													</a>
												</div>
												<div className="product-content">
													<div className="inner">
														<div className="product-cate"><a href="#">KIDS’ DOLLS</a></div>
														<div className="color-variant-wrapper">
															<ul className="color-variant">
																<li className="color-extra-01 active"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-02"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-03"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-05"><span><span className="color"></span></span>
																</li>
															</ul>
														</div>
														<h5 className="title"><a href="single-product-8.html">Men’s Suit Separates with Performance Stretch Fabric</a></h5>
														<div className="product-rating">
															<span className="icon">
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
															</span>
															<span className="rating-number">226</span>
														</div>
														<div className="product-price-variant">
															<span className="price-text">Price</span>
															<span className="price current-price">$159.00</span>
														</div>
													</div>
												</div>
												<div className="label-block label-right">
													<div className="product-badget sale">SALE</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="slick-single-layout">
									<div className="row">
										<div className="col-md-6 col-12">
											<div className="axil-product product-style-eight product-list-style-3">
												<div className="thumbnail">
													<a href="single-product-8.html">
														<img className="main-img" src="assets/images/product/fashion/product-34.png" alt="Product Images" />
													</a>
												</div>
												<div className="product-content">
													<div className="inner">
														<div className="product-cate"><a href="#">KIDS’ DOLLS</a></div>
														<div className="color-variant-wrapper">
															<ul className="color-variant">
																<li className="color-extra-01 active"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-02"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-03"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-05"><span><span className="color"></span></span>
																</li>
															</ul>
														</div>
														<h5 className="title"><a href="single-product-8.html">Manhattan Toy Wee Baby Stella Peach 12" Soft Baby Doll</a></h5>
														<div className="product-rating">
															<span className="icon">
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
															</span>
															<span className="rating-number">1540</span>
														</div>
														<div className="product-price-variant">
															<span className="price-text">Price</span>
															<span className="price current-price">$59.00</span>
														</div>
													</div>
												</div>
												<div className="label-block label-right">
													<div className="product-badget sold-out">SOLD OUT</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-12">
											<div className="axil-product product-style-eight product-list-style-3">
												<div className="thumbnail">
													<a href="single-product-8.html">
														<img className="main-img" src="assets/images/product/fashion/product-35.png" alt="Product Images" />
													</a>
												</div>
												<div className="product-content">
													<div className="inner">
														<div className="product-cate"><a href="#">KIDS’ DOLLS</a></div>
														<div className="color-variant-wrapper">
															<ul className="color-variant">
																<li className="color-extra-01 active"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-02"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-03"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-05"><span><span className="color"></span></span>
																</li>
															</ul>
														</div>
														<h5 className="title"><a href="single-product-8.html">Business Women Suit Set 3 Pieces Notch Lapel Single Breasted Vest </a></h5>
														<div className="product-rating">
															<span className="icon">
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
															</span>
															<span className="rating-number">563</span>
														</div>
														<div className="product-price-variant">
															<span className="price-text">Price</span>
															<span className="price current-price">$99.00</span>
														</div>
													</div>
												</div>
												<div className="label-block label-right">
													<div className="product-badget">TOP SELLING</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-12">
											<div className="axil-product product-style-eight product-list-style-3">
												<div className="thumbnail">
													<a href="single-product-8.html">
														<img className="main-img" src="assets/images/product/fashion/product-36.png" alt="Product Images" />
													</a>
												</div>
												<div className="product-content">
													<div className="inner">
														<div className="product-cate"><a href="#">KIDS’ DOLLS</a></div>
														<div className="color-variant-wrapper">
															<ul className="color-variant">
																<li className="color-extra-01 active"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-02"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-03"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-05"><span><span className="color"></span></span>
																</li>
															</ul>
														</div>
														<h5 className="title"><a href="single-product-8.html">Skechers Men's Energy Afterburn Lace-Up Sneaker</a></h5>
														<div className="product-rating">
															<span className="icon">
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
															</span>
															<span className="rating-number">1,235</span>
														</div>
														<div className="product-price-variant">
															<span className="price-text">Price</span>
															<span className="price current-price">$70.00</span>
														</div>
													</div>
												</div>
												<div className="label-block label-right">
													<div className="product-badget">20% OFF</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-12">
											<div className="axil-product product-style-eight product-list-style-3">
												<div className="thumbnail">
													<a href="single-product-8.html">
														<img className="main-img" src="assets/images/product/fashion/product-37.png" alt="Product Images" />
													</a>
												</div>
												<div className="product-content">
													<div className="inner">
														<div className="product-cate"><a href="#">KIDS’ DOLLS</a></div>
														<div className="color-variant-wrapper">
															<ul className="color-variant">
																<li className="color-extra-01 active"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-02"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-03"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-04"><span><span className="color"></span></span>
																</li>
																<li className="color-extra-05"><span><span className="color"></span></span>
																</li>
															</ul>
														</div>
														<h5 className="title"><a href="single-product-8.html">Men’s Suit Separates with Performance Stretch Fabric</a></h5>
														<div className="product-rating">
															<span className="icon">
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
																<i className="fas fa-star"></i>
															</span>
															<span className="rating-number">226</span>
														</div>
														<div className="product-price-variant">
															<span className="price-text">Price</span>
															<span className="price current-price">$159.00</span>
														</div>
													</div>
												</div>
												<div className="label-block label-right">
													<div className="product-badget sale">SALE</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</main>


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

				<div className="header-search-modal" id="header-search-modal">
					<button className="card-close sidebar-close"><i className="fas fa-times"></i></button>
					<div className="header-search-wrap">
						<div className="card-header">
							<form action="#">
								<div className="input-group">
									<input type="search" className="form-control" name="prod-search" id="prod-search" placeholder="Write Something...." />
									<button type="submit" className="axil-btn btn-bg-primary"><i className="far fa-search"></i></button>
								</div>
							</form>
						</div>
						<div className="card-body">
							<div className="search-result-header">
								<h6 className="title">24 Result Found</h6>
								<a href="shop.html" className="view-all">View All</a>
							</div>
							<div className="psearch-results">
								<div className="axil-product-list">
									<div className="thumbnail">
										<a href="single-product.html">
											<img src="./assets/images/product/electric/product-09.png" alt="Yantiti Leather Bags" />
										</a>
									</div>
									<div className="product-content">
										<div className="product-rating">
											<span className="rating-icon">
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fal fa-star"></i>
											</span>
											<span className="rating-number"><span>100+</span> Reviews</span>
										</div>
										<h6 className="product-title"><a href="single-product.html">Media Remote</a></h6>
										<div className="product-price-variant">
											<span className="price current-price">$29.99</span>
											<span className="price old-price">$49.99</span>
										</div>
										<div className="product-cart">
											<a href="cart.html" className="cart-btn"><i className="fal fa-shopping-cart"></i></a>
											<a href="wishlist.html" className="cart-btn"><i className="fal fa-heart"></i></a>
										</div>
									</div>
								</div>
								<div className="axil-product-list">
									<div className="thumbnail">
										<a href="single-product.html">
											<img src="./assets/images/product/electric/product-09.png" alt="Yantiti Leather Bags" />
										</a>
									</div>
									<div className="product-content">
										<div className="product-rating">
											<span className="rating-icon">
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fal fa-star"></i>
											</span>
											<span className="rating-number"><span>100+</span> Reviews</span>
										</div>
										<h6 className="product-title"><a href="single-product.html">Media Remote</a></h6>
										<div className="product-price-variant">
											<span className="price current-price">$29.99</span>
											<span className="price old-price">$49.99</span>
										</div>
										<div className="product-cart">
											<a href="cart.html" className="cart-btn"><i className="fal fa-shopping-cart"></i></a>
											<a href="wishlist.html" className="cart-btn"><i className="fal fa-heart"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className="cart-dropdown" id="cart-dropdown">
					<div className="cart-content-wrap">
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
					</div>
				</div>



				{/* 
				<script src="assets/js/vendor/modernizr.min.js"></script>

				<script src="assets/js/vendor/jquery.js"></script>

				<script src="assets/js/vendor/popper.min.js"></script>
				<script src="assets/js/vendor/bootstrap.min.js"></script>
				<script src="assets/js/vendor/slick.min.js"></script>
				<script src="assets/js/vendor/js.cookie.js"></script>

				<script src="assets/js/vendor/jquery-ui.min.js"></script>
				<script src="assets/js/vendor/jquery.ui.touch-punch.min.js"></script>
				<script src="assets/js/vendor/jquery.countdown.min.js"></script>
				<script src="assets/js/vendor/sal.js"></script>
				<script src="assets/js/vendor/jquery.magnific-popup.min.js"></script>
				<script src="assets/js/vendor/imagesloaded.pkgd.min.js"></script>
				<script src="assets/js/vendor/isotope.pkgd.min.js"></script>
				<script src="assets/js/vendor/counterup.js"></script>
				<script src="assets/js/vendor/waypoints.min.js"></script> */}


				<script src="assets/js/main.js"></script>

			</div>
		</div>
	)
}

export default IndexPage