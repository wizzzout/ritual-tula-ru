'use client'

import { fetchProducts, Product } from '@/lib/api'
import Image from 'next/image'
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
				console.log(data)
			} catch (error) {
				setError('Не удалось загрузить продукты')
			} finally {
				setLoading(false)
			}
		}

		loadProducts()
	}, [])

	if (loading) {
		return <div>Загрузка...</div>
	}

	if (error) {
		return <div>{error}</div>
	}

	return (
		<div>
			<h1>Наши продукты</h1>
			<div>
				{products.map(product => (
					<div key={product.id}>
						<h2>{product.acf.name}</h2>
						<p>Цена: {product.acf.price} руб.</p>
						{product.acf.image && (
							<Image src={product.acf.image} alt={product.title.rendered} />
						)}
					</div>
				))}
			</div>
		</div>
	)
}
