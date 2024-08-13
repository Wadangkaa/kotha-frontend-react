import CategorySelectComponent from '@/components/category/CategorySelectComponent'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const KothaCreatePage = () => {
	return (
		<div className='p-4'>
			<div className="basic-info">

				<Input
					placeholder='title'
				/>
				<Input
					placeholder='description'
				/>

				<CategorySelectComponent />

				<Input
					placeholder='price'
					type='number'
				/>

				<RadioGroup defaultValue="option-one">
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="option-one" id="option-one" />
						<Label htmlFor="option-one">Negotiable</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="option-two" id="option-two" />
						<Label htmlFor="option-two">Not negotiable</Label>
					</div>
				</RadioGroup>

				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select Purpose" />
					</SelectTrigger>
					<SelectContent>

						<SelectItem value="rent">Rent</SelectItem>
						<SelectItem value="sale">Sale</SelectItem>
						<SelectItem value="lease">Lease</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className='facility'>
				<Input
					placeholder='Bed Rooms'
					type='number'
				/>
				<Input
					placeholder='Kitchen'
					type='number'
				/>
				<Input
					placeholder='Bathroom'
					type='number'
				/>

				<RadioGroup defaultValue="option-one">
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="option-one" id="option-one" />
						<Label htmlFor="option-one">Yes</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="option-two" id="option-two" />
						<Label htmlFor="option-two">No</Label>
					</div>
				</RadioGroup>

				<RadioGroup defaultValue="option-one">
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="option-one" id="option-one" />
						<Label htmlFor="option-one">Yes</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="option-two" id="option-two" />
						<Label htmlFor="option-two">No</Label>
					</div>
				</RadioGroup>


				<Input
					placeholder='Rental Floor'
					type='number'
				/>
				<RadioGroup defaultValue="option-one">
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="option-one" id="option-one" />
						<Label htmlFor="option-one">Yes</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="option-two" id="option-two" />
						<Label htmlFor="option-two">No</Label>
					</div>
				</RadioGroup>
			</div>

		</div>
	)
}

export default KothaCreatePage