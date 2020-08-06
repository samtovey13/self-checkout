const { selfCheckout, scanItem, addItem, totalPrice, removeItem } = require('../src');

const clothes = [
    {
        name : "shirt",
        barcode: 12345678,
        price: 22
    },
    {
        name: "trousers",
        barcode: 23456789,
        price: 35
    },
    {
        name : "sunglasses",
        barcode: 34567890,
        price: 80
    },
    {
        name: "hoodie",
        barcode: 45678901,
        price: 29.99
    },
    {
        name: "hat",
        barcode: 56789012,
        price: 12.99
    }
];

let emptyBasket;
let basket1;
let basket2;
let basket3;

beforeEach(() => {
    emptyBasket = [];
    basket1 = [
        { name : "shirt", barcode: 12345678, price: 22},
        { name: "hat", barcode: 56789012, price: 12.99},
    ];
    basket2 = [
        { name : "shirt", barcode: 12345678, price: 22},
        { name: "hat", barcode: 56789012, price: 12.99},
        { name: "hat", barcode: 56789012, price: 12.99},
    ];
    basket3 = [
        { name : "sunglasses", barcode: 34567890, price: 80 },
        { name: "hoodie", barcode: 45678901, price: 29.99 },
        { name: "trousers", barcode: 23456789, price: 35},
    ];
});



describe('scanItem', () => {
    test('recognises a barcode and outputs the object name', () => {
        expect(selfCheckout.scanItem(56789012, clothes)).toBe("hat");
    });
    test('returns an error if barcode not recognised', () => {
        expect(selfCheckout.scanItem(2468, clothes)).toBe("barcode not recognised");
    });
});

describe('addItem', () => {
    it('adds an item to the basket', () => {
        expect(selfCheckout.addItem("shirt", clothes, emptyBasket)).toEqual([{ name : "shirt", barcode: 12345678, price: 22}]);
        expect(selfCheckout.addItem("hat", clothes, basket1)).toEqual(basket2);
    });
    it('accepts scanItem() as an argument', () => {
        expect(selfCheckout.addItem(scanItem(56789012, clothes), clothes, basket1)).toEqual(basket2);
    });
});

describe('totalPrice', () => {
    it('returns the sum of all items in the basket', () => {
        expect(selfCheckout.totalPrice(basket2)).toEqual("£47.98");
    });
    it('returns an error if basket is empty', () => {
        expect(selfCheckout.totalPrice(emptyBasket)).toBe("Error: Basket is empty");
    });
});

describe('removeItem', () => {
    it('removes an item from the basket', () => {
        expect(selfCheckout.removeItem("hat", basket2)).toEqual(basket1);
    });
    it('returns an error if item is not already in basket', () => {
        expect(selfCheckout.removeItem("hat", emptyBasket)).toBe("Error: item not in basket, cannot be removed.");
    });
});