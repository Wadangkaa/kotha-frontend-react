const SidebarFilter = () => {
	return (
		<div><div className="col-lg-3 cart-content-wrap">
			<div className="cart-header">
				<h2 className="header-title">Filter kotha</h2>
				<button className="cart-close sidebar-close"><i className="fas fa-times"></i></button>
			</div>
			<div className="axil-shop-sidebar">
				<div className="toggle-list product-categories active">
					<h6 className="title">DISTRICT</h6>
					<div className="shop-submenu">
						<select name="district">
							<option value="lalitpur">lalitpur</option>
							<option value="lalitpur">lalitpur</option>
							<option value="lalitpur">lalitpur</option>
							<option value="lalitpur">lalitpur</option>
							<option value="lalitpur">lalitpur</option>
						</select>
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
		</div></div>
	)
}

export default SidebarFilter