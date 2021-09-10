"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this.millage = 10000;
    }
    getActualMillage() {
        const realMillage = this.millage + 5000;
        return realMillage;
    }
    getTotalPrice(tax) {
        const realPrice = this.price * tax / 100;
        const totalPrice = this.price + realPrice;
        return totalPrice;
    }
}
const toyota = new Car('Toyota', 10000);
