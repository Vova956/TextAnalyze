const {Schema, model } = require('mongoose');

//String Number Date Boolean ObjectId Array 

const UserSchema = new Schema({
    login : {type: String,require : true,unique : true},
    password : {type: String, require : true},
    admin : {type : Boolean, require:true}
})

module.exports = model('user',UserSchema)