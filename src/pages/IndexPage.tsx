import KothaExploreCard from "@/components/kotha/KothaExploreCard"
import { ApiResponseWithPagination } from "@/types/commonTypes"
import { Kotha } from "@/types/models"
import { apiFetch } from "@/utilities/apiFetch"
import { useEffect, useState } from "react"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"

import { DevTool } from "@hookform/devtools"
import RecommendationForm from "@/components/RecommendationForm"

const getKothas = async (): Promise<ApiResponseWithPagination<Kotha[]>> => {
	return await apiFetch<ApiResponseWithPagination<Kotha[]>>('api/kotha')
}

const IndexPage = () => {

	const [kothas, setKothas] = useState<Kotha[]>([])

	useEffect(() => {
		getKothas().then(response => setKothas(response.data.data))
	}, [])

	const onSubmit = (e) => {
		e.preventDefault();
		alert('Submit')
	}

	return (
		<main className="main-wrapper">

			<div className="axil-main-slider-area main-slider-style-4">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="main-slider-content">
								<h1 className="title tw-font-semibold">Find Your Perfect Home Today.</h1>
								<div className="shop-btn">

									<Dialog>
										<DialogTrigger asChild>
											<button className="axil-btn btn-bg-primary tw-w-[50%]"><i className="far fa-search"></i> Find kotha for me</button>
										</DialogTrigger>
										<DialogContent className="tw-max-w-[50%]">
											<DialogHeader>
												<DialogTitle className="tw-text-lg">Enter you preference</DialogTitle>
												<RecommendationForm />
											</DialogHeader>
										</DialogContent>
									</Dialog>

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

			<div className="axil-product-area bg-color-white section-gap-80-35">
				<div className="container">
					<div className="section-title-border">
						<h2 className="title tw-text-6xl tw-font-bold">Explore Our Kothas </h2>
					</div>
					<div className="row">
						{ kothas.map(kotha => <KothaExploreCard key={ kotha.id } kotha={ kotha } />) }
					</div>
				</div>
			</div>

		</main >
	)
}

export default IndexPage