const express = require('express')
const router = express.Router()
const Book = require('../models/book')

router.get('/',async(req,res)=>{
    
    try {
       const book = await Book.find()
       res.json(book)
    } catch (error) {
        res.send(`Error ${error}`)
    }
})

router.get('/:id',async(req,res)=>{
    
    try {
       const book = await Book.findById(req.params.id)
       res.json(book)
    } catch (error) {
        res.send(`Error ${error}`)
    }
})

router.post('/', async(req, res)=> {
    const newBook = new Book({
            bookName:req.body.bookName,
            authorName:req.body.authorName,
            year:req.body.year,
            category:req.body.category
    })
  
    try {
        const result= await newBook.save()
        res.json(result)
    } catch (error) {
        res.send(error)
    }
})

router.patch('/:id', async(req, res)=> {
    try {
        const result= await Book.findById(req.params.id)
        result.authorName = req.body.authorName
        const updatedResult = await result.save()
        res.json(updatedResult)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', async(req, res)=> {
    try {
        const result= await Book.findByIdAndDelete(req.params.id)
        res.json(result)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router