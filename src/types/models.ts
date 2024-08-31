export type Category = {
	id: number
	name: string
	created_at: string
}

export type Image = {
	id: number
	image_url: string
}

export type Kotha = {
	id: number
	title: string
	description: string
	images: Image[]
	category_id: number
	category: Category
	price: number
	negotiable: number
	purpose: string
	created_at: Date
}
