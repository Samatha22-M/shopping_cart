const updateInventoryCount = (product_name, inventory_count) => {
    return `update "product_details" set "inventory_count"= ${inventory_count} where "product_name"='${product_name}'`;
};

const updateCart = (items, userId) => {
    return `update "cart_details" set "items"= ${items}, "updated_on"=now() where "user_id"='${userId}'`;
};

module.exports = {
    updateInventoryCount,
    updateCart
};