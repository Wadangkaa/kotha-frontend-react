import { Input } from '@/components/ui/user/input'
import { Textarea } from '@/components/ui/user/textarea'
import Select from "@/components/ui/user/select"
import { useCustomForm } from '@/hooks/useCustomForm'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const KothaCreatePage = () => {

	const handleCloseDialog = () => {
		clearErrors()
		// handleClose()
	}

	const createTaskSchema = z.object({
		name: z.string().min(2).max(100),
		description: z.string().min(10).max(500),
		paymentType: z.enum(["lumsum", "hourly"], {
			required_error: "Type is required",
			// invalid_error: "Select Type",
		}),
		weight: z.preprocess(
			(val) => Number(val),
			z
				.number()
				.min(1, "Weight must be at least 1")
				.max(100, "Weight must be at most 100")
		),
		amount: z.preprocess(
			(val) => Number(val),
			z.number().min(1, "Amount must be at least 1")
		),
	})

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
		resolver: zodResolver(createTaskSchema),
	})

	// const onSubmit = async (data) => {
	// 	try {
	// 		await api(
	// 			`http://${window.location.hostname}:5000/projects/scopes/tasks/add`,
	// 			{
	// 				method: "POST",
	// 				body: JSON.stringify({ ...data, projectId, scopeId }),
	// 			}
	// 		)
	// 		reset()
	// 		// handleClose()
	// 		toast.success("Successfully added")
	// 	} catch (error) {
	// 		toast.error("Failed to add task")
	// 	}
	// }

	return (
		<div className='p-4'>

			<div className="col-lg-9">
				<div className="axil-dashboard-account">
					<form className="account-details-form">
						<div className="row">
							<h5 className="title tw-font-semibold tw-text-3xl tw-mb-8">Basic Information</h5>

							<div className="col-12">
								<Input label='Title' />
							</div>

							<div className="col-12">
								<Textarea label='Description' rows={ 2 } placeholder="e.g. near GoldenGate, kathmandu." />
							</div>

							<div className="col-4">
								<Select label='Purpose'>
									<option value="1">Rent</option>
									<option value="1">Lease</option>
									<option value="1">United Arab Emirates (UAE)</option>
									<option value="1">Australia</option>
								</Select>
							</div>

							<div className="col-4">
								<Select label='Category'>
									<option value="1">2BHK</option>
									<option value="1">3BHK</option>
									<option value="1">United Arab Emirates (UAE)</option>
									<option value="1">Australia</option>
								</Select>
							</div>

							<div className="col-4">
								<Select label='District'>
									<option value="1">Kathmandu</option>
									<option value="1">Udayapur</option>
								</Select>
							</div>

							<h5 className="title tw-font-semibold tw-text-3xl tw-mb-8">Additional Information about Kotha</h5>

							<div className="col-4">
								<Select label='Kitchen'>
									<option value="1">Yes</option>
									<option value="1">No</option>
								</Select>
							</div>

							<div className="col-4">
								<Input label='Bedroom' placeholder='eg: 2' type='number' />
							</div>

							<div className="col-4">
								<Select label='Bathroom'>
									<option value="1">Yes</option>
									<option value="1">No</option>
								</Select>
							</div>

							<div className="col-4">
								<Select label='Parking'>
									<option value="1">Yes</option>
									<option value="1">No</option>
								</Select>
							</div>

							<div className="col-4">
								<Select label='Balcony'>
									<option value="1">Yes</option>
									<option value="1">No</option>
								</Select>
							</div>

							<div className="col-4">
								<Select label='Water Supply'>
									<option value="1">Yes</option>
									<option value="1">No</option>
								</Select>
							</div>

							<div className="col-4">
								<Select label='Rental Floor'>
									<option value="1">Ground</option>
									<option value="1">First</option>
								</Select>
							</div>

							<h5 className="title tw-font-semibold tw-text-3xl tw-mb-8">Contact Informations</h5>

							<div className="col-6">
								<Input label='Phone Number' type='number' />
							</div>

							<div className="col-6">
								<Input label='Alternative Phone Number (Optional)' type='number' />
							</div>

							<h5 className="title tw-font-semibold tw-text-3xl tw-mb-8">Location in Map</h5>

							<div className="col-6">
								<Select label='District'>
									<option value="1">Kathmandu</option>
									<option value="1">Udayapur</option>
								</Select>
							</div>

							<div className="col-12">
							</div>

							<div className="form-group mb--0">
								<input type="submit" className="axil-btn" value="Save Changes" />
							</div>
						</div>
					</form>
				</div>
			</div>

		</div>
	)
}

export default KothaCreatePage