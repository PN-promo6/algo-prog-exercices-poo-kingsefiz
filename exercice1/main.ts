class Book {
  name: string;
  price: number;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let martine = new Book("Martine à la plage", 5);
console.log(martine.name);
console.log(martine.price);
