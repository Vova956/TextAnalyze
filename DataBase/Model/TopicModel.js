const {Schema, model} = require('mongoose');

const TopicSchema = new Schema({
    name : {type: String,require : true,unique : true},
    words : {type: [String]}
})

module.exports = model('topic', TopicSchema)