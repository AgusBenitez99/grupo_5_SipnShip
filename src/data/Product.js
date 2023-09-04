const {v4 : uuidv4} = require('uuid');

const Product = function({name,brand,price,size,discount,description,mainImage,images}){
    
    this.id = uuidv4();
    this.name = name.trim();
    this.brand = brand;
    this.price = +price;
    this.size=size.trim();
    // this.discount = +discount;
    this.description = description.trim()
    this.mainImage=mainImage
    this.images = images
    this.created = new Date();
    // this.modified = new Date();
}

module.exports = Product;