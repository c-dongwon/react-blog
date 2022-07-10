const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const categorySchema = mongoose.Schema({
   id: {
        type:Number,
   },
   category : {
    type : String
   }
})

categorySchema.plugin(autoIncrement.plugin,{
	model : 'Category',
	field : 'id',
	startAt : 1,
	increment : 1 
});

const Category = mongoose.model('Category', categorySchema);

module.exports = { Category }