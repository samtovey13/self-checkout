const scanItem = (barcode, items) => {
    const item = items.find(item => item.barcode === barcode);
    if (!item) { 
        return "barcode not recognised"};
    return item.name;
};

const addItem = (itemName, items, basket) => {
    const item = items.find(item => item.name === itemName);
    basket.push(item);
    return basket;
};

const totalPrice = (basket) => {
    if (basket.length < 1) {
        return "Error: Basket is empty";
    }
    const priceArr = basket.map(item => item.price);
    return "£" + priceArr.reduce((a, b) => a + b).toFixed(2);
};

const removeItem = (itemName, basket) => {
    const index = basket.findIndex(item => item.name === itemName);
    if (index === -1) {
        return "Error: item not in basket, cannot be removed."
    };
    basket.splice(index, 1);
    return basket;
};

module.exports = { scanItem, addItem, totalPrice, removeItem };