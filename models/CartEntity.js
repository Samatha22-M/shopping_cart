const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    var CartDetails = sequelize.define(
        'cart_details',
        {
            orderId: {
                primaryKey: true,
                field: "order_id",
                type: DataTypes.STRING,

            },
            userId: {
                field: "user_id",
                type: DataTypes.STRING,

            },
            items: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                field: "items",
                allowNull: false
            },
            CreatedOn: {
                type: "TIMESTAMP",
                field: "created_on",
                allowNull: false
            },
            UpdatedOn: {
                type: "TIMESTAMP",
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
                onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
                field: "updated_on",
                allowNull: false
            }

        },
        {
            timestamps: false,
            underscored: true
        }
    );

    return CartDetails;
};

