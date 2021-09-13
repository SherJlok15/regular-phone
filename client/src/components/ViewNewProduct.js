import React from 'react'

export default function ViewNewProduct({ item, deleteCharacteristicItem }) {
	return (
		<div className="view-new-product">
			<h3 className="view-new-product__title title">New Product VIEW</h3>
			<div className="view-new-product__photo">
				{
					item.photo ?
						<img src={item.photo} alt={item.brandName + ' ' + item.modelName} />
						:
						<img src="https://icon-library.com/images/add-photo-icon/add-photo-icon-19.jpg" alt="add new image" />

				}
			</div>
			<div>
				<h3>
					{item.brandName + ' ' + item.modelName}
				</h3>
			</div>
			<div>
				<h5>
					{item.description}
				</h5>
			</div>
			<div>
				<h5>
					{item.price}
				</h5>
			</div>

			<h3>Description</h3>
			<ul>
			{
				Object.keys(item.characteristics).length !== 0 ?
				Object.entries(item.characteristics).map(i => {
					return <li key={i[0] + i[1]}>{i[0]} : {i[1]} <span onClick={() => {
						deleteCharacteristicItem(i[0])
					}}>x</span></li>
				})
				:
				'Empty'
			}
			</ul>

		</div>
	)
}