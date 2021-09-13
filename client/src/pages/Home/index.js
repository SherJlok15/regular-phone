import React, { useEffect, useState } from 'react'
import {ProductsItemTemplate} from '../../components'
import products from '../../util/api/products'
import './home.scss'

export default function Home() {
	let [productsArr, setProductsArr] = useState(null)
	let [error, setError] = useState(null)
	useEffect(() => {
		products.getAllProducts()
			.then(({ data }) => {
				console.log(data);
				setProductsArr(data)
			})
			.catch(err => setError(err.message))
	}, [])
	return (
		<div className="home-page">
			{
				error ?
					error :
					productsArr ?
						productsArr?.map(i => <ProductsItemTemplate item={i} key={i._id}/>)
						:
						'Loading'
			}

		</div>
	)
}