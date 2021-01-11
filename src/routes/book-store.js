const express = require('express');
const path = require('path');
const bookController = require('../../controllers/bookController');
const { requireAuth } = require('../../middleware/authMiddleware');



// Define bookRouter
bookRouter = express.Router();
bookRouter.use(express.urlencoded({ extended: true }));


//Routes
bookRouter.post('/book-store',  bookController.bookStore_post);
    
    
bookRouter.get('/book-store/add', requireAuth, bookController.bookStore_add);


bookRouter.get('/book-store', bookController.bookStore_get);


bookRouter.get('/books/:id', requireAuth, bookController.bookStore_getById);

    
        
module.exports = bookRouter;