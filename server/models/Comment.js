const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const boardSchema = mongoose.Schema({
    id: {
        type:Number,
    },
    name : {
        type : String
    },
    content : {
        type : String,
        maxlength:5000
    },
    createdAt:{
        type : Date,
        default : Date.now
    }
},{timestamps:true})

boardSchema.plugin(autoIncrement.plugin,{
    model : 'Comment',
    field : 'id',
    startAt : 1,
    increment : 1
});

const Comment = mongoose.model('Comment', boardSchema);

module.exports = { Comment }