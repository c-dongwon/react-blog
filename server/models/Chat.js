const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = mongoose.Schema({
    msg:{
        type:String
    },
    timeStamp:{
        type:String
    },
    userId:{
        type:String
    },
    userName:{
        type:String
    },
    file:{
        type:String
    }
})

const Chat = mongoose.model("chat", chatSchema)

module.exports = {Chat}