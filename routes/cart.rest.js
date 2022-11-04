const { CartService } = require('../services');
const serviceHandler = require("../serviceHandler").serviceHandler;


function loadRoutes(app) {

    app.post('/cart/item', function (req, res) {
        try {
            const userId = req.headers.user_id
            serviceHandler(req, res, CartService.addItemToCart(req.body, userId));
        } catch (err) {
            throw err;
        }

    });

    app.post('/cart/items', function (req, res) {
        try {
            const userId = req.headers.user_id

            serviceHandler(req, res, CartService.removeItemsFromCart(req.body, userId));
        } catch (err) {
            throw err;
        }

    });

    app.get('/cart/items', function (req, res) {
        try {
            const userId = req.headers.user_id

            serviceHandler(req, res, CartService.getItemsFromCart(userId));
        } catch (err) {
            throw err;
        }

    });

}

module.exports = loadRoutes;