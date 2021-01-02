const express = require('express');
const path = require('path');
const bookController = require('../../controllers/bookController')



// Define bookRouter
bookRouter = express.Router();
bookRouter.use(express.urlencoded({ extended: true }));


//Routes
bookRouter.post('/book-store',  bookController.bookStore_post);
    
    
bookRouter.get('/book-store/add', bookController.bookStore_add);


bookRouter.get('/book-store', bookController.bookStore_get);


bookRouter.get('/books/:id', bookController.bookStore_getById);

    
    
bookRouter.delete('/books/:id', bookController.bookStore_delete);
        
module.exports = bookRouter;