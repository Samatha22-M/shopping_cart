
module.exports = (sequelize, DataTypes) => {
    var ProductDetails = sequelize.define(
        'product_details',
        {
            productId: {
                primaryKey: true,
                field: "product_id",
                type: DataTypes.STRING,

            },
            productName: {
                field: "product_name",
                type: DataTypes.STRING,

            },
            productPrice: {
                field: "product_price",
                type: DataTypes.INTEGER,
                allowNull: false
            },
            weightInGrams: {
                field: "weight_in_grams",
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            discountpercentage: {
                field: "discount_percentage",
                type: DataTypes.INTEGER,
                allowNull: false
            },

        },
        {
            timestamps: false,
            underscored: true
        }
    );

    return ProductDetails;
};

