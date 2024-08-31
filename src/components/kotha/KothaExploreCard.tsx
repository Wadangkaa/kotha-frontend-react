import { Kotha } from "@/types/models"
import { NavLink } from "react-router-dom"

type KothaExploreCardProps = {
	kotha: Kotha
}

const KothaExploreCard = ({ kotha }: KothaExploreCardProps) => {

	return (
		<>
			<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
				<div className="axil-product product-style-eight">
					<div className="thumbnail tw-w-[300px] tw-h-[200px]">
						<img data-sal-delay="150" data-sal-duration="800" loading="lazy"
							className="main-img tw-w-full tw-h-full tw-object-cover tw-rounded-[6px]"
							src={ `${import.meta.env.VITE_BASE_URL}/storage/${kotha.images[0].image_url}` }
							alt={ kotha.title } />
						<div className="label-block label-left">
							<div className="product-badget">{ kotha.category.name }</div>
						</div>
						<div className="product-hover-action">
							<ul className="cart-action">
								<li className="select-option">
									<NavLink to={ `/details/${kotha.id}` }>
										<i className="far fa-eye"></i> View Details
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<div className="product-content">
						<div className="inner">
							<h5 className="title"><a href="single-product-8.html">{ kotha.title.length > 28 ? kotha.title.substring(0, 28) + "..." : kotha.title }</a></h5>
							<div className="tw-mb-2">
								<i className="far fa-location-dot "></i>
								<span className="tw-font-semibold"> { kotha.price }</span>
							</div>
							<div className="product-price-variant">
								<span className="price current-price">Rs. { kotha.price }</span>
							</div>
						</div>
					</div>
				</div>
			</div></>
	)
}

export default KothaExploreCard