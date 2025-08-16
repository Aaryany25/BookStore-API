const express = require("express")
const controller = require("../controllers/book.controllers")
const router = express.Router()
router.get("/",controller.GetAllBooks)
router.get("/:id",controller.GetBookByID)
router.post("/",controller.PostBook)
router.delete('/:id',controller.DeleteBook)

module.exports = router