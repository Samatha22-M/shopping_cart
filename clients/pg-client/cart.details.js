

const { db } = require('./db.provider');
const { updateCart } = require('./query.constants');

class CartDetails {

    async addItem(productObj) {

        //    console.log("productObj ", productObj);
        //    const userExists = await db["cart_details"].findOne({ where: { user_id: productObj.userId } });
        //    console.log("userExistssssssssssssss", userExists);
        //   if (!userExists) {
        //       console.log("ifffffffffff");
        //
        //       let a = await db["cart_details"].create((productObj));
        //       console.log("aaaaaaaaaaaa", a);
        //       return a;
        //
        //   }
        //   else {
        //       console.log("else")
        //       console.log("&&&&&&&&&&&&&&&&&&&&", userExists.dataValues.items);
        //       console.log("%%%%%%%%%%%%%%%%%%%%%", productObj.items[0]);
        //       userExists.dataValues.items.push(productObj.items[0]);
        //       const query = updateCart(userExists.dataValues.items, productObj.userId);
        //       return db.sequelize.query(query);
        //   }

        let a = await db["cart_details"].create((productObj));
        console.log("aaaaaaaaaaaa", a);
        return a;


    }

    async removeItems(userId) {
        return db["cart_details"].destroy({ where: { user_id: userId } });
    }

    async getItems(userId) {
        return db["cart_details"].findAll({ where: { user_id: userId } });
    }

}

module.exports = new CartDetails();
