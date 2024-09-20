import { Input } from '@/components/ui/user/input'
import { Textarea } from '@/components/ui/user/textarea'
import Select from "@/components/ui/user/select"
import { ApiResponse, useCustomForm } from '@/hooks/useCustomForm'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { apiFetch } from '@/utilities/apiFetch'

const KothaCreatePage = () => {
	const navigate = useNavigate()
	const [center, setCenter] = useState<google.maps.LatLngLiteral | null>(null);
	const [purpose, setPurpose] = useState([])
	const [district, setDistrict] = useState([])
	const [categories, setCategories] = useState([])
	const [rentalFloors, setRentalFloors] = useState([])

	const getData = async () => {
		try {
			const [categoriesResponse, purposeResponse, districtResponse, rentalFloorResponse] = await Promise.all([
				apiFetch('api/kotha/category/all'),
				apiFetch('api/kotha/purpose/all'),
				apiFetch('api/kotha/district/all'),
				apiFetch('api/kotha/rental-floor/all'),
			]);

			// Assuming each API response has a .json() method
			const categories = await categoriesResponse.data;
			const purpose = await purposeResponse.data;
			const district = await districtResponse.data;
			const rentalFloors = await rentalFloorResponse.data;

			setCategories(categories);
			setPurpose(purpose);
			setDistrict(district);
			setRentalFloors(rentalFloors);
		} catch (error) {
			console.error('Failed to fetch data:', error);
		}
	};

	useEffect(() => {
		getData()
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setCenter({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
				},
				(error) => {
					console.error('Error fetching location', error);
					setCenter({ lat: 27.693771, lng: 85.329209 }); // Default center
				}
			);
		} else {
			console.error('Geolocation is not supported by this browser.');
			setCenter({ lat: 27.693771, lng: 85.329209 }); // Fallback to default
		}
	}, []);

	const onDragEnd = (e: google.maps.MapMouseEvent) => {
		if (!e.latLng) return;
		setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() });
	};

	const handleCloseDialog = () => {
		clearErrors()
		// handleClose()
	}

	const MAX_FILE_SIZE = 1024 * 1024 * 5;
	const ACCEPTED_IMAGE_MIME_TYPES = [
		"image/jpeg",
		"image/jpg",
		"image/png",
		"image/webp",
	];

	const createKothaSchema = z.object({
		title: z.string().min(3).max(255),
		description: z.string().min(3).max(800).optional().or(z.literal('')),
		purpose: z.string(),
		category: z.string().transform(value => Number(value)),
		district: z.string().transform(value => Number(value)),
		negotiable: z.string().transform(val => val === "1").transform(val => Number(val)),
		price: z.string().transform(value => Number(value)),
		images: z
			.any()
			.refine((files) => {
				return files?.[0]?.size <= MAX_FILE_SIZE;
			}, `Max image size is 5MB.`)
			.refine(
				(files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
				"Only .jpg, .jpeg, .png and .webp formats are supported."
			),
		// facilities
		kitchen: z.string().transform(val => val === "1").transform(val => Number(val)),
		bed_room: z.string().min(1, { message: "Bedroom is required" }).transform(value => Number(value)),
		parking: z.string().transform(val => val === "1").transform(val => Number(val)),
		bathroom: z.string().min(1, { message: "Bedroom is required" }).transform(value => Number(value)),
		balcony: z.string().transform(val => val === "1").transform(val => Number(val)),
		water_facility: z.string().transform(val => val === "1").transform(val => Number(val)),
		rental_floor: z.string().transform(value => Number(value)),
		// contacts
		number: z.string().length(10, { message: 'Phone number should contain 10 digits' }).transform(value => Number(value)),
		alternative_number: z.string().length(10, { message: 'Phone number should contain 10 digits' }).transform(value => Number(value)).optional().or(z.literal('')),
	})

	type KothaFormValue = z.infer<typeof createKothaSchema>

	const {
		register,
		handleSubmit,
		api,
		errors,
		isSubmitting,
		clearErrors,
		reset,
		control,
	} = useCustomForm({
		resolver: zodResolver(createKothaSchema),
	})

	const onSubmit = async (data: KothaFormValue) => {
		try {
			if (!data.alternative_number) {
				delete data.alternative_number;
			}

			if (!data.description) {
				delete data.description;
			}

			// Create FormData object
			const formData = new FormData();

			// Append all form fields to FormData
			Object.keys(data).forEach((key) => {
				if (key === "images") {
					// Handle multiple image files
					for (let i = 0; i < data.images.length; i++) {
						formData.append("images[]", data.images[i]); // Use "images[]" if sending an array of files
					}
				} else {
					formData.append(key, data[key]);
				}
			});

			// Append latitude and longitude to formData
			if (center) {
				formData.append("latitude", center.lat.toString());
				formData.append("longitude", center.lng.toString());
			}

			// Make the API request
			await api(`api/kotha`, {
				method: "POST",
				body: formData, // Send FormData instead of JSON
			});

			reset();
			toast.success("Successfully added");

			navigate('/account/posts')
		} catch (error) {
			toast.error("Failed to create kotha");
		}
	};


	return (
		<div className='p-4'>

			<div className="col-lg-9">
				<div className="axil-dashboard-account">
					<form className="account-details-form" onSubmit={ handleSubmit(onSubmit) } noValidate>
						<div className="row">
							<h5 className="title tw-font-semibold tw-text-3xl tw-mb-8">Basic Information</h5>

							<div className="col-12">
								<Input label='Title' { ...register('title') } error={ errors.title } />
							</div>

							<div className="col-12">
								<Textarea label='Description (Optional)' rows={ 2 } placeholder="e.g. near GoldenGate, kathmandu." { ...register('description') } error={ errors.description } />
							</div>

							<div className="col-4">
								<Select label='Purpose' { ...register('purpose') } error={ errors.purpose }>
									{ purpose.map((purpose, index) => (
										<option value={ purpose } key={ index }>{ purpose }</option>
									)) }
								</Select>
							</div>

							<div className="col-4">
								<Select label='Category' { ...register('category') } error={ errors.category }>
									{ categories.map((category: Object, index) => (
										<option value={ category.id } key={ index }>{ category.name }</option>
									)) }
								</Select>
							</div>

							<div className="col-4">
								<Select label='District' { ...register('district') } error={ errors.district }>
									{ district.map((district, index) => (
										<option value={ district.id } key={ index }>{ district.name }</option>
									)) }
								</Select>
							</div>

							<div className="col-4">
								<Input label='Images' type='file' { ...register('images') } error={ errors.images } multiple />
							</div>

							<div className="col-4">
								<Select label='Negotiation' { ...register('negotiable') } error={ errors.negotiable }>
									<option value="1">Yes</option>
									<option value="0">No</option>
								</Select>
							</div>

							<div className="col-4">
								<Input label='Price' placeholder='eg: 2999' type='number' { ...register('price') } error={ errors.price } />
							</div>

							<h5 className="title tw-font-semibold tw-text-3xl tw-mb-8">Additional Information about Kotha</h5>

							<div className="col-4">
								<Select label='Kitchen' { ...register('kitchen') } error={ errors.kitchen }>
									<option value="1">Yes</option>
									<option value="0">No</option>
								</Select>
							</div>

							<div className="col-4">
								<Input label='bed_room' placeholder='eg: 2' type='number' { ...register('bed_room') } error={ errors.bed_room } />
							</div>

							<div className="col-4">
								<Input label='Bathroom' placeholder='eg: 3' type='number' { ...register('bathroom') } error={ errors.bathroom } />
							</div>

							<div className="col-4">
								<Select label='Parking' { ...register('parking') } error={ errors.parking }>
									<option value="1">Yes</option>
									<option value="0">No</option>
								</Select>
							</div>

							<div className="col-4">
								<Select label='Balcony' { ...register('balcony') } error={ errors.balcony }>
									<option value="1">Yes</option>
									<option value="0">No</option>
								</Select>
							</div>

							<div className="col-4">
								<Select label='Water Supply' { ...register('water_facility') } error={ errors.water_facility }>
									<option value="1">Yes</option>
									<option value="0">No</option>
								</Select>
							</div>

							<div className="col-4">
								<Select label='Rental Floor' { ...register('rental_floor') } error={ errors.rental_floor }>
									{ rentalFloors.map((rentalFloor, index) => (
										<option value={ rentalFloor.id } key={ index }>{ rentalFloor.floor }</option>
									)) }
								</Select>
							</div>

							<h5 className="title tw-font-semibold tw-text-3xl tw-mb-8">Contact Informations</h5>

							<div className="col-6">
								<Input label='Phone Number' type='number' { ...register('number') } error={ errors.number } />
							</div>

							<div className="col-6">
								<Input label='Alternative Phone Number (Optional)' type='number' { ...register('alternative_number') } error={ errors.alternative_number } />
							</div>

							<h5 className="title tw-font-semibold tw-text-3xl tw-mb-8">Location in Map</h5>

							<div className="col-12 tw-h-[400px]">
								<APIProvider apiKey={ 'AIzaSyBt4cUvR9HOpwhNs_edkOTaYdRaHfgnfCs' }>
									{ center && (
										<Map defaultCenter={ center } defaultZoom={ 14 } mapId={ 'kotha-434221' }>
											<AdvancedMarker position={ center } draggable={ true } onDragEnd={ onDragEnd } />
										</Map>
									) }
								</APIProvider>
							</div>

							<div className="form-group tw-mt-8 mb--0">
								<input type="submit" value="Register" />
							</div>
						</div>
					</form>
				</div>
			</div>

		</div>
	)
}

export default KothaCreatePage