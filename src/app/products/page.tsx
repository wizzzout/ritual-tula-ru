'use client'

import { fetchProducts, Product } from '@/lib/api'
import { useEffect, useState } from 'react'

export default function ProductsPage() {
	const [products, setProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const loadProducts = async () => {
			try {
				const data = await fetchProducts()
				setProducts(data)
			} catch (error) {
				setError('Не удалось загрузить продукты')
			} finally {
				setLoading(false)
			}
		}

		loadProducts()
	}, [])

	if (loading) {
		return <div className='text-center'>Загрузка...</div>
	}

	if (error) {
		return <div className='text-center text-red-500'>{error}</div>
	}

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-2xl font-bold mb-4'>Наши продукты</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{products.map(product => (
					<div key={product.id} className='border p-4 rounded-lg shadow-md'>
						<h2 className='text-xl font-semibold'>{product.title.rendered}</h2>
						<p className='text-gray-600'>Цена: {product.acf.price} руб.</p>
						{product.acf.image && (
							<img
								src={product.acf.image}
								alt={product.title.rendered}
								className='mt-4 rounded-lg'
							/>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
