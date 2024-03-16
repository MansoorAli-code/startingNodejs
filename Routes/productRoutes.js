const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res) => {
    res.send('<form action="/add-product" method="POST">' +
        '<input type="text" name="product" placeholder="Product">' +
        '<input type="text" name="size" placeholder="Size">' +
        '<button type="submit">Add Product</button></form>');
});

router.post('/add-product', (req, res) => {
    const product = req.body.product;
    const size = req.body.size;
    console.log('New product:', product, 'Size:', size);
    res.redirect('/');
});

module.exports = router;
