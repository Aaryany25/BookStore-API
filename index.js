const express = require('express')
const app = express()
const PORT =8000
const bookrouter = require("./routers/book.routes")
const {Logger} = require("./middleware/logger")
///MiddleWares
app.use(express.json())
app.use(Logger)
//Routes 
app.use("/books",bookrouter)
app.listen(PORT,()=>{
console.log(`Server is Running on ${PORT}`)
})