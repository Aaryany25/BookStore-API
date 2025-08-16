const books = require("../models/books")
 exports.GetAllBooks = function(req,res){
     res.json(books)
 }
 exports.GetBookByID = function(req,res){
     const id = req.params.id
    const book = books.find((e)=>e.id==id)
    if(isNaN(id)){
        return res.status(400).json({error:"Bad Request !"})
    }
    if(!book)
        return res.status(404).json({error:"Book not found !"})
    return res.json(book)
 }
 exports.PostBook = function(req,res){
      const {title , author} = req.body
    if(!title || title==='') 
        return res.status(400).json({error:"title is required"})
    if(!author || author==='') 
        return res.status(400).json({error:"author  is required"})
const id = books.length+1
const book ={id,title,author}
    books.push(book)

    return res.status(201).json({Meassge : "Book created Successfully "})
 }
 exports.DeleteBook = function(req,res){
     id = req.params.id
    if(isNaN(id)){
        return res.status(400).json({error:"Bad Request !"})
    }
    const IndextoDelete = books.find((e)=>e.id==id)
    if(IndextoDelete<0)
        return res.status(404).json({error:"Book does not exist "})

books.splice(IndextoDelete,1)

return res.json({delete : "deleted Successfully"})
 }