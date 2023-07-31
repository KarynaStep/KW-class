

const Product = class {
  #name;
  #price;
  #currency;
  #quantity;
  constructor(name, price, currency, quantity) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.quantity = quantity;
  }
  getInformation() {
    return `
name: ${this.#name}
price: ${this.#price}${this.#currency}
quantity: ${this.#quantity}`;
  }
  buy(quantityBuy) {
    if (quantityBuy > this.quantity) {
      throw new RangeError(
        "The quantity of goods is more than what is in stock"
      );
    }
    if (typeof quantityBuy !== "number" || Number.isNaN(quantityBuy)) {
      throw new TypeError("enter the number");
    }
    if (quantityBuy <= 0) {
      throw new RangeError("enter a number greater than 0");
    }

    const sumu = quantityBuy * this.#price;
    this.#quantity = this.#quantity - quantityBuy;
    return sumu.toFixed(2);
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("enter the string");
    }
    if (name.trimStart() === "") {
      throw new RangeError("enter name");
    }
    this.#name = name;
  }
  get price() {
    return this.#price;
  }
  set price(price) {
    if (typeof price !== "number" || Number.isNaN(price)) {
      throw new TypeError("enter the number");
    }
    if (price < 0) {
      throw new RangeError("enter a number greater than 0");
    }

    this.#price = price;
  }
  get currency() {
    return this.#currency;
  }
  set currency(currency) {
    if (typeof currency !== "string") {
      throw new TypeError("enter the string");
    }
    if (currency.trimStart() === "") {
      throw new RangeError("enter currency");
    }
    this.#currency = currency;
  }
  get quantity() {
    return this.#quantity;
  }
  set quantity(quantity) {
    if (typeof quantity !== "number" || Number.isNaN(quantity)) {
      throw new TypeError("enter the number");
    }
    if (Number.isInteger(quantity) === false) {
      throw new RangeError("enter an integer");
    }
    if (quantity <= 0) {
      throw new RangeError("enter a number greater than 0");
    }
    this.#quantity = quantity;
  }
};

class PhysicalProduct extends Product {
  #weight;
  constructor(name, price, currency, quantity, weight) {
    super(name, price, currency, quantity);
    this.weight = weight;
  }
  getInformation() {
    return `${super.getInformation()}
weight: ${this.#weight}`;
  }
  get weight() {
    return this.#weight;
  }
  set weight(weight) {
    if (typeof weight !== "number" || Number.isNaN(weight)) {
      throw new TypeError("enter the number");
    }
    if (weight <= 0) {
      throw new RangeError("enter a number greater than 0");
    }
    this.#weight = weight;
  }
}

class VirtualProduct extends Product {
  #memorySize;
  constructor(name, price, currency, quantity, memorySize) {
    super(name, price, currency, quantity);
    this.memorySize = memorySize;
  }
  getInformation() {
    return `${super.getInformation()}
memorySize: ${this.#memorySize}`;
  }
  get memorySize() {
    return this.#memorySize;
  }
  set memorySize(memorySize) {
    if (typeof memorySize !== "number" || Number.isNaN(memorySize)) {
      throw new TypeError("enter the number");
    }
    if (memorySize <= 0) {
      throw new RangeError("enter a number greater than 0");
    }
    this.#memorySize = memorySize;
  }
}

try {
  console.group();
  const product = new Product("Aple", 7.4, "$", 10);
  console.log(product);
  console.log(product.getInformation());
  console.log(product.buy(6));
  console.log(product.getInformation());
  console.groupEnd();

  const physicalProduct = new PhysicalProduct("Banana", 3, "$", 90, 11);
  console.log(physicalProduct);
  console.log(physicalProduct.getInformation());

  const virtualProduct = new VirtualProduct("Memory", 120, "$", 30, 160);
  console.log(virtualProduct);
  console.log(virtualProduct.getInformation());

} catch (error) {
  console.log(error.message);
}