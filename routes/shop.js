const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', isAuth, shopController.getCart);

router.post('/cart', isAuth, shopController.postCart);

router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);

router.post('/products',(req,res)=>{
    let firstName = req.body.search; // here you can get the value of from the textbox
})

router.post('/cart-show-locations', isAuth, shopController.getLocations);

router.post('/search', isAuth, shopController.getProductS);

router.get('/search', isAuth, shopController.getProductS);


router.get('/checkout', isAuth, shopController.getCheckout);

router.get('/locations', isAuth, shopController.getLocations);

router.get('/orders', isAuth, shopController.getOrders);

module.exports = router;
