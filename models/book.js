const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('Book',bookSchema)