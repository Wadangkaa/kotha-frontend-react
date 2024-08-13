import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setCategories } from "@/redux/slices/categorySlice"
import { AppDispatch, RootState } from "@/redux/store"
import { ApiResponseWithPagination } from "@/types/commonTypes"
import { Category } from "@/types/models"
import { apiFetch } from "@/utilities/apiFetch"
import { useEffect } from "react"


const CategorySelectComponent = () => {
	const dispatch = useAppDispatch()
	const categoryStore = useAppSelector((state: RootState) => state.category)

	const fetchCategories = async () => {
		const response = await apiFetch<ApiResponseWithPagination<Category[]>>('api/category')
		dispatch(setCategories(response.data.data))
	}

	useEffect(() => {
		fetchCategories()
	}, [])

	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select Category" />
			</SelectTrigger>
			<SelectContent>

				{ categoryStore.categories.map((category) => (
					<SelectItem value={ category.id.toString() } key={ category.id }>{ category.name }</SelectItem>
				)) }
			</SelectContent>
		</Select>

	)
}

export default CategorySelectComponent