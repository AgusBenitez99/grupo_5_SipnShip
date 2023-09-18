//requiero 'uuid'
const {v4: uuidv4} = require('uuid')
//requiero hashSync
const{hashSync}= require('bcryptjs')



const User = function({firstName, lastName, email, password,image}){
    this.id= uuidv4();
    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
    this.email= email.trim();
    this.image = image;
    this.password = hashSync(password.trim(),10);
}

module.exports = User;