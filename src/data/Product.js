const {v4 : uuidv4} = require('uuid');

const Product = function({name,brand,price,size,discount,description,image}){
    
    this.id = uuidv4();
    this.name = name.trim();
    this.brand = brand;
    this.price = +price;
    this.size=size.trim();
    // this.discount = +discount;
    this.description = description.trim()
    this.image = image
    this.created = new Date();
    // this.modified = new Date();
}

module.exports = Product;