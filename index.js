const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')

const mongoose = require('mongoose')

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
       console.log("db connected")
})

const bookRouter = require('./routers/books');

app.use(morgan('dev'))

app.use('/books',bookRouter);

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))