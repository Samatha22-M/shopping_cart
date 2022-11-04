
const { pgClient } = require("../clients")
const { cartDetails: cartDetailsClient } = pgClient;
const moment = require("moment");

class CartService {
    async addItemToCart(reqBody, userId) {
        console.log({ fileName: "cart.service.js", functionName: "addItemsToCart" }, "addItemsToCart ");
        try {

            const cartObj = {
                userId: userId,
                orderId: Math.random(),
                CreatedOn: moment().format("YYYY-MM-DD HH:mm:ss"),
                items: [JSON.stringify(reqBody)]
            };
            await cartDetailsClient.addItem(cartObj);


            return {
                body: {
                    response: reqBody
                }
            };
        } catch (err) {
            console.error({ fileName: "cart.service.js", functionName: "addItemsToCart" }, "Failed to addItemsToCart " + err.message);
            throw err;
        }

    }

    async getItemsFromCart(userId) {
        console.log({ fileName: "cart.service.js", functionName: "getItemsFromCart" }, "getItemsFromCart ");
        try {
            const cartData = await cartDetailsClient.getItems(userId);
            const items = [];
            cartData.forEach((ele) => {
                items.push(...ele.dataValues.items);

            })
            return {
                body: {
                    status: "success",
                    message: "Item available in the cart",
                    items: items
                }
            };

        } catch (err) {
            console.error({ fileName: "cart.service.js", functionName: "getItemsFromCart" }, "Failed to getItemsFromCart: " + err.message);
            throw err;
        }


    }

    async removeItemsFromCart(reqBody, userId) {
        console.log({ fileName: "cart.service.js", functionName: "removeItemsFromCart" }, "removeItemsFromCart ");
        try {

            const userData = await cartDetailsClient.removeItems(userId);
            console.log("################", userData)
            return {
                body: {

                    status: "success",
                    message: "All items have been removed from the cart!"
                }
            };
        } catch (err) {
            console.error({ fileName: "user.service.js", functionName: "removeItemsFromCart" }, "Failed to removeItemsFromCart: " + err.message);
            throw err;
        }

    }
}
module.exports = new CartService();
