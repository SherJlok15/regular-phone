import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {
	return (
		<nav className="navbar">
			<Link to="/" className="navbar__item">Main</Link>
			<Link to="/add" className="navbar__item">Add Product</Link>
		</nav>
	)
}