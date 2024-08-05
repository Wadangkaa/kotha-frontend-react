// types.ts
export type RequestOptions = {
	method?: string
	headers?: HeadersInit
	body?: string
}

export type ErrorResponse = {
	status: number
	message: string
	error: { [key: string]: string }
}

export type ApiResponse<T> = {
	data: T
	status: number
	message: string
}

export type ApiResponseWithPagination<T> = ApiResponse<{
	data: T
	links: Links
	meta: Meta
}>

export type Link = {
	url: null | string
	label: string
	active: boolean
}

export type Meta = {
	current_page: number
	from: number
	last_page: number
	links: Link[]
	path: string
	per_page: number
	to: number
	total: number
}

export type Links = {
	first: string
	last: string
	prev: null
	next: string
}
