import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductsItemTemplate ({item}) {
	return (
		<div className="home-page__item">
			<div className="home-page__item-photo">
				<img src={item.photo} alt={item.brandName + ' ' + item.modelName} />
			</div>
			<div className="home-page__item-title">
				<h3>
					{item.brandName + ' ' + item.modelName}
				</h3>
			</div>
			<div className="home-page__item-description">
				<h5>
					{item.description}
				</h5>
			</div>
			<div className="home-page__item-price">
				<h5>
					{item.price}
				</h5>
			</div>
			<div className="home-page__item-link">
				<Link to={`/${item._id}`}>More information</Link>
			</div>
		</div>
	)
}