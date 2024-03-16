const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.send('All Products');
});

router.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Product ID: ${productId}`);
});

module.exports = router;
