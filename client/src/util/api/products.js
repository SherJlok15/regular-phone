import axios from '../../core/axios';

export default {
	getAllProducts: () => axios.get('/products'),
	getOneProduct: (id) => axios.get('/products/'+id),
	addNewProduct: (product) => axios.post('/products/add', product)
}
