import React, { useState } from 'react';
import productsApi from '../../util/api/products';

import { ViewNewProduct } from '../../components'

import './AddProduct.scss'

export default function AddProduct({ history }) {
	console.log()
	let [newProduct, setNewProduct] = useState({
		brandName: '',
		modelName: '',
		description: '',
		price: '',
		photo: '',
		characteristics: {}
	})

	let [inputError, setInputError] = useState('')

	let [productCharacteristic, setProductCharacteristic] = useState({
		title: '',
		description: ''
	})

	function deleteCharacteristicItem(item) {
		let newCharacteristics = newProduct.characteristics
		delete newCharacteristics[`${item}`]
		setNewProduct({ ...newProduct, characteristics: { ...newCharacteristics } })
	}

	return (
		<div className="add-product">
			<form onSubmit={(e) => {
				e.preventDefault()
			}}>
				<h3 className="title">Add Product information</h3>

				<div className="add-product__inputs">

					<div>
						<label>
							<span>Brand Name: </span>
							<input type="text" value={newProduct.brandName} onChange={(e) => {
								setNewProduct({ ...newProduct, brandName: e.target.value })
							}} />
						</label>
					</div>

					<div>
						<label>
							<span>Model Name: </span>
							<input type="text" value={newProduct.modelName} onChange={(e) => {
								setNewProduct({ ...newProduct, modelName: e.target.value })
							}} />
						</label>
					</div>

					<div>
						<label>
							<span>Description: </span>
							<input type="text" value={newProduct.description} onChange={(e) => {
								setNewProduct({ ...newProduct, description: e.target.value })
							}} />
						</label>
					</div>

					<div>
						<label>
							<span>Price: </span>
							<input type="text" value={newProduct.price} onChange={(e) => {
								setNewProduct({ ...newProduct, price: e.target.value })
							}} />
						</label>
					</div>

					<div>
						<label>
							<span>Photo: </span>
							<input type="text" value={newProduct.photo} onChange={(e) => {
								setNewProduct({ ...newProduct, photo: e.target.value })
							}} />
						</label>
					</div>
				</div>

				<div className="add-product__inputs">
					<h3 className="title"> Add Product characteristics</h3>

					<div >
						<label>
							<span>Title: </span>
							<input type="text" value={productCharacteristic.title} onChange={(e) => {
								setProductCharacteristic({ ...productCharacteristic, title: e.target.value })
							}} />
						</label>
					</div>

					<div>
						<label>
							<span>Description: </span>
							<input type="text" value={productCharacteristic.description} onChange={(e) => {
								setProductCharacteristic({ ...productCharacteristic, description: e.target.value })
							}} />
						</label>
					</div>

					<button className="button" onClick={() => {
						if (productCharacteristic.description.trim().length !== 0
							&& productCharacteristic.title.trim().length !== 0) {
							let newcharacteristics = {}
							newcharacteristics[productCharacteristic.title.trim()] = productCharacteristic.description.trim()
							setNewProduct({
								...newProduct,
								characteristics: { ...newProduct.characteristics, ...newcharacteristics }
							})
							setProductCharacteristic({
								title: '',
								description: ''
							})
						}
					}}>Add characteristic</button>

				</div>

			</form>

			<div>
				<ViewNewProduct item={newProduct} deleteCharacteristicItem={deleteCharacteristicItem} />
			</div>

			<div>
				<div className="error-block">{inputError ?? ''}</div>

				<button className="button" onClick={() => {
					if (newProduct.brandName.trim().length === 0 ||
						newProduct.modelName.trim().length === 0 ||
						newProduct.description.trim().length === 0 ||
						newProduct.price.trim().length === 0 ||
						newProduct.photo.trim().length === 0 ||
						Object.entries(newProduct.characteristics).length === 0
					) {
						setInputError('All input fields is required')


					} else {
						setInputError('')
						productsApi.addNewProduct(newProduct)
						setNewProduct({
							brandName: '',
							modelName: '',
							description: '',
							price: '',
							photo: '',
							characteristics: {}
						})
						history.push('/')
					}

				}}>Add New Product</button>

			</div>
		</div>
	)
}