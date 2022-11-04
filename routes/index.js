let userRouter = require('./user.rest');
let productRouter = require('./product.rest');
let cartRouter = require('./cart.rest')

function loadroutes(app) {

    userRouter(app);
    productRouter(app);
    cartRouter(app);

}

module.exports = loadroutes;