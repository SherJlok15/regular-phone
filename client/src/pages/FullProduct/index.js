import React, { useEffect, useState } from 'react'
import products from '../../util/api/products'
import './FullProduct.scss'

export default function FullProduct({ match }) {
	let [product, setProduct] = useState(null)
	let [error, setError] = useState(null)
	useEffect(() => {
		products.getOneProduct(match.params.id)
			.then(({ data }) => setProduct(data))
			.catch(err => {
				setError(err.message)
			})
	}, [])

	return (
		<div className="full-product">
			{
				error ?
					error :
					!product ?
						"Loading" :
						<div>
							<div className="full-product__photo">
								<img src={product.photo} alt={product.brandName + ' ' + product.modelName} />
							</div>
							<div>
								<h3>
									{product.brandName + ' ' + product.modelName}
								</h3>
							</div>
							<div>
								<h5>
									{product.description}
								</h5>
							</div>
							<div>
								<h5>
									{product.price}
								</h5>
							</div>
							<div className="full-product__description">
								<h3>Description :</h3>
							{
								Object.entries(product.characteristics).map(i => {
								return <li key={i[0]+i[1]}>{i[0]} : {i[1]}</li>
								})
							}
							</div>
						</div>
			}
		</div>
	)
}