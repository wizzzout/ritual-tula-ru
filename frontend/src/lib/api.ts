import axios from 'axios'

export interface Product {
	id: number
	title: {
		rendered: string
	}
	acf: {
		name: string
		price: number
		desc: string
		sku: string
		images: number
	}
}

export async function fetchProducts(): Promise<Product[]> {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/product/`
		)
		return response.data
	} catch (error) {
		console.error('Ошибка при загрузке продуктов:', error)
		throw new Error('Не удалось загрузить продукты')
	}
}
