const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const boardSchema = mongoose.Schema({
   id: {
        type:Number,
   },
   category : {
    type : String
   },
   title: {
       type : String,
       maxlength:50
   },
   content : {
       type : String,
       maxlength:5000
   },
   createdAt:{ // 글을 생성한 날짜 
       type : Date,
       default : Date.now
   }
},{timestamps:true})

boardSchema.plugin(autoIncrement.plugin,{
	model : 'Board',
	field : 'id',
	startAt : 1,
	increment : 1 
});

const Board = mongoose.model('Board', boardSchema);

module.exports = { Board }