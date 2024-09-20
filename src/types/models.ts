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
	district: District
	negotiable: number
	purpose: string
	status: number
	status_name: string
	created_at: Date
}

export type KothaDetail = {
	id: number
	title: string
	description: string
	images: Image[]
	category_id: number
	category: Category
	district: District
	price: number
	negotiable: number
	purpose: string
	facility: Facility
	contact: Contact
	created_at: Date
}

export type Contact = {
	id: number
	kotha_id: number
	number: string
	alternative_number: string
	longitude: string
	latitude: string
	created_at: Date
	updated_at: Date
	kotha: Kotha
}

export type Facility = {
	bed_room: number
	kitchen: string
	bathroom: number
	parking: string
	balcony: string
	rental_floor_id: number
	rental_floor_name: string
	water_facility: string
}

type District = {
	id: number
	name: string
}
