
const { ProductService } = require('../services');
const serviceHandler = require("../serviceHandler").serviceHandler;


function loadRoutes(app) {

    app.post('/createProduct', function (req, res) {
        try {
            serviceHandler(req, res, ProductService.createProduct(req.body));
        } catch (err) {
            throw err;
        }

    });


    app.get('/getProductById', function (req, res) {
        const productId = req.headers.product_id
        serviceHandler(req, res, ProductService.getProductById(productId));

    });

}

module.exports = loadRoutes;