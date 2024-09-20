
import { Input } from "@/components/ui/user/input"
import { useCustomForm } from "@/hooks/useCustomForm"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { z } from "zod"
import Select from "@/components/ui/user/select"

const userPreferenceSchema = z.object({
	district: z.string().transform(value => Number(value)),
	negotiable: z.string().transform(val => val === "1").transform(val => Number(val)),
	purpose: z.string(),
	category: z.string().transform(value => Number(value)),
	parking: z.string().transform(val => val === "1").transform(val => Number(val)),
	water_facility: z.string().transform(val => val === "1").transform(val => Number(val)),
	kitchen: z.string().transform(val => val === "1").transform(val => Number(val)),
	min_price: z.string().min(1).transform(val => Number(val)),
	max_price: z.string().min(1).transform(val => Number(val)),
}).refine((data) => data.min_price <= data.max_price, {
	message: "Min price should be less than or equal to max price",
	path: ["min_price"], // You can customize the path if needed
});


type UserPreferenceFormValue = z.infer<typeof userPreferenceSchema>

const RecommendationForm = () => {


	const {
		register,
		handleSubmit,
		api,
		errors,
		isSubmitting,
		clearErrors,
		reset,
		control,
	} = useCustomForm<UserPreferenceFormValue>({
		resolver: zodResolver(userPreferenceSchema),
	})

	const onSubmit = async (data: UserPreferenceFormValue) => {
		try {

			await api(`api/recommendation`, {
				method: "POST",
				body: JSON.stringify(data)
			});

			reset();
			toast.success("Successfully added");

			// navigate('/account/posts')
		} catch (error) {
			toast.error("Failed to create kotha");
		}
	};
	return (
		<form onSubmit={ handleSubmit(onSubmit) } className="singin-form" noValidate>

			<div className="form-group">
				<Select label='District' { ...register('district') } error={ errors.district }>
					<option value="1">2BHK</option>
					<option value="1">3BHK</option>
					<option value="1">United Arab Emirates (UAE)</option>
					<option value="1">Australia</option>
				</Select>
			</div>

			<div className="row">
				<div className="col-4">
					<Select label='Purpose' { ...register('purpose') } error={ errors.purpose }>
						<option value="rent">Rent</option>
						<option value="rent">Lease</option>
						<option value="rent">United Arab Emirates (UAE)</option>
						<option value="rent">Australia</option>
					</Select>
				</div>

				<div className="col-4">
					<Select label='Category' { ...register('category') } error={ errors.category }>
						<option value="1">2BHK</option>
						<option value="1">3BHK</option>
						<option value="1">United Arab Emirates (UAE)</option>
						<option value="1">Australia</option>
					</Select>
				</div>

				<div className="col-4">
					<Select label='Negotiation' { ...register('negotiable') } error={ errors.negotiable }>
						<option value="1">Yes</option>
						<option value="1">No</option>
					</Select>
				</div>
			</div>

			<div className="row">
				<div className="col-4">
					<Select label='Parking' { ...register('parking') } error={ errors.parking }>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</Select>
				</div>

				<div className="col-4">
					<Select label='Kitchen' { ...register('kitchen') } error={ errors.kitchen }>
						<option value="1">Yes</option>
						<option value="0">No</option>
					</Select>
				</div>

				<div className="col-4">
					<Select label='Water Supply' { ...register('water_facility') } error={ errors.water_facility }>
						<option value="1">Yes</option>
						<option value="1">No</option>
					</Select>
				</div>
			</div>

			<h5 className="title tw-font-semibold tw-text-3xl tw-mb-8 tw-text-center">Price</h5>

			<div className="row">
				<div className="tw-flex gap-4 tw-justify-center">
					<Input type="number" className="tw-inline-block" label="Min" { ...register('min_price') } error={ errors.min_price } />
					<Input type="number" className="tw-inline-block" label="Max" { ...register('max_price') } error={ errors.max_price } />
				</div>
			</div>

			<button type="submit" className="axil-btn btn-bg-primary submit-btn">Find Kotha</button>
		</form>

	)
}

export default RecommendationForm
