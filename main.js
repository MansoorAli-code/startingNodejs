const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

const productRoutes = require('./Routes/productRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const shopRoutes = require('./Routes/shopRoutes');

app.use('/products', productRoutes);
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
