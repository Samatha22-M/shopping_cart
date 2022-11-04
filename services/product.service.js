
const { pgClient } = require("../clients");
const errors = require("../errors/errors");

const { productDetails: productDetailsClient, userDetails: userDetailsClient } = pgClient;

class ProductService {
    async createProduct(reqBody) {
        console.log({ fileName: "user.service.js", functionName: "createProduct" }, "Create Product ");
        try {
            let response = [];

            const productObj = {
                "productId": reqBody.product_id,
                "productName": reqBody.product_name,
                "weightInGrams": reqBody.weight_in_grams,
                "productPrice": reqBody.product_price,
                "discountpercentage": reqBody.discount_percentage,
            };
            await productDetailsClient.storeProduct(productObj);
            response.push(reqBody);

            return {
                body: {
                    response: response
                }
            };
        } catch (err) {
            console.error({ fileName: "user.service.js", functionName: "createUser" }, "Failed to create user " + err.message);
            throw err;
        }

    }

    async updateProduct(reqBody, email, password) {
        console.log({ fileName: "user.service.js", functionName: "userLogin" }, "update product ");
        try {
            let response = [];
            const userObj = {
                email: email,
                password: password,
            };
            const productObj = {
                "productName": reqBody.product_name,
                "inventoryCount": reqBody.inventory_count,
            };
            const userData = await userDetailsClient.getUser(userObj);
            if (userData.role === "admin" || userData.role === "manager") {
                const productData = await productDetailsClient.updateProduct(productObj);
                response.push(productData);

                return {
                    body: {
                        response: response
                    }
                };
            }

            else {
                throw new Error("Invalid User");
            }
        } catch (err) {
            console.error({ fileName: "user.service.js", functionName: "userLogin" }, "Failed to update product: " + err.message);
            throw err;
        }

    }

    async deleteProduct(reqBody, email, password) {
        console.log({ fileName: "user.service.js", functionName: "deleteProduct" }, "delete product ");
        try {
            let response = [];
            const userObj = {
                email: email,
                password: password,
            };

            const userData = await userDetailsClient.getUser(userObj);
            if (userData.role === "admin") {
                const userData = await productDetailsClient.deleteProduct(reqBody.product_name);
                response.push(userData);

                return {
                    body: {
                        response: response
                    }
                };
            }
        } catch (err) {
            console.error({ fileName: "user.service.js", functionName: "deleteProduct" }, "Failed to deleteProduct: " + err.message);
            throw err;
        }

    }

    async getProductById(productId) {
        console.log({ fileName: "product.service.js", functionName: "get product" }, "get all products ");
        try {
            const productData = await productDetailsClient.getProductById(productId);

            return {
                body: {
                    status: "success",
                    product: productData
                }
            };

        } catch (err) {
            console.error({ fileName: "product.service.js", functionName: "get product" }, "Failed to deleteProduct: " + err.message);
            throw err;
        }

    }
}
module.exports = new ProductService();
