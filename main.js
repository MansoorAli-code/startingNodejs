const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));


app.get('/add-product', (req, res) => {
    res.send('<form action="/add-product" method="POST">' +
        '<input type="text" name="product" placeholder="Product">' +
        '<input type="text" name="size" placeholder="Size">' +
        '<button type="submit">Add Product</button></form>');
});


app.post('/add-product', (req, res) => {
    const product = req.body.product;
    const size = req.body.size;
    console.log('New product:', product, 'Size:', size);
    res.redirect('/'); 
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
