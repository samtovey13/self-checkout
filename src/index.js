const selfCheckout = require("../src/selfCheckout")

const { scanItem, addItem, totalPrice, removeItem } = require("../src/selfCheckout");

module.exports = {
    selfCheckout,
    scanItem, 
    addItem, 
    totalPrice, 
    removeItem
};
