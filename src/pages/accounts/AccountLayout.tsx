import { NavLink, Outlet } from "react-router-dom"

const MyAccount = () => {
	return (
		<div>
			<div className="axil-dashboard-area axil-section-gap">
				<div className="container">
					<div className="axil-dashboard-warp">
						<div className="row">
							<div className="col-xl-3 col-md-4">
								<aside className="axil-dashboard-aside">
									<nav className="axil-dashboard-nav">
										<div className="nav nav-tabs" role="tablist">
											<a className="nav-item nav-link active" data-bs-toggle="tab" href="#nav-dashboard" role="tab" aria-selected="true"><i className="fas fa-th-large"></i>Dashboard</a>
											<a className="nav-item nav-link" data-bs-toggle="tab" href="/create-kotha" role="tab" aria-selected="false"><i className="fas fa-home"></i>Register Kotha</a>
											<NavLink className="nav-item nav-link" to="create-kotha" ><i className="fas fa-home"></i>Register Kotha</NavLink>
											<a className="nav-item nav-link" data-bs-toggle="tab" href="#nav-orders" role="tab" aria-selected="false"><i className="fas fa-shopping-basket"></i>Orders</a>
											<a className="nav-item nav-link" data-bs-toggle="tab" href="#nav-downloads" role="tab" aria-selected="false"><i className="fas fa-file-download"></i>Downloads</a>
											<a className="nav-item nav-link" data-bs-toggle="tab" href="#nav-address" role="tab" aria-selected="false"><i className="fas fa-home"></i>Addresses</a>
											<a className="nav-item nav-link" data-bs-toggle="tab" href="#nav-account" role="tab" aria-selected="false"><i className="fas fa-user"></i>Account Details</a>
											<NavLink className="nav-item nav-link" to="/logout"><i className="fal fa-sign-out"></i>Logout</NavLink>
										</div>
									</nav>
								</aside>
							</div>
							<div className="col-xl-9 col-md-8">
								<div className="tab-content">
									<Outlet />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyAccount