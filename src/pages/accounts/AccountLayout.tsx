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
											<NavLink className="nav-item nav-link" to="/account"><i className="fas fa-th-large"></i>Dashboard</NavLink>
											<NavLink className="nav-item nav-link" to="/account/create-kotha" ><i className="fas fa-home"></i>Register Kotha</NavLink>
											<NavLink className="nav-item nav-link" to="/account/posts"><i className="fas fa-shopping-basket"></i>My Posts</NavLink>
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