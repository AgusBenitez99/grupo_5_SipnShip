//requiero 'uuid'
const {v4: uuidv4} = require('uuid')
//requiero hashSync
const{hashSync}= require('bcryptjs')



const User = function({nombre, apellido, email, password,image}){
    this.id= uuidv4();
    this.firstName = nombre.trim();
    this.lastName = apellido.trim();
    this.email= email.trim();
    this.image = image;
    this.password = hashSync(password.trim(),10);
}

module.exports = User;