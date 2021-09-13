const router = require('express').Router();
const Product = require('../models/product.model');

router.route('/').get((req, res) => {
	Product.find()
		.then(products => res.json(products)
		)
		.catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
	Product.findById(req.params.id)
		.then(product => res.json(product))
		.catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
	console.log(req.body)

  const newProduct = new Product(req.body);

  newProduct.save()
    .then((product) => {
      res.json(product._id)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;