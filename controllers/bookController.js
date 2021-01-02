const Book = require('../models/books');

module.exports.bookStore_post = (req, res) => {
        const book = new Book(req.body)
        book.save()
            .then((result) => {
                res.redirect('/book-store')
            })

            .catch((err) =>{
                console.log(err);
            })
 };

module.exports.bookStore_get = (req, res) => {
            Book.find()
        .then((result) =>{
            res.render('book-store', {
                title: 'Book Store',
                heading: 'buy a book here',
                books: result
            })
        })
        .catch((err) => {
            console.log(err);
        });
 };

module.exports.bookStore_add = (req, res) =>{
        
        res.render('add', 
            {title: 'Add a book',
             heading: 'add a book'
            });
 };

module.exports.bookStore_getById = (req, res) => {
        const id = req.params.id
        Book.findById(id)
            .then((result) => {
                let book = result;
                res.render('book', {
                    title: book.title,
                    heading: book.title,
                    body: book.body,
                    book: book
                })
            })
            .catch((err) => {
                console.log(err)
            });
};

module.exports.bookStore_delete = (req, res) => {
        const id = req.params.id;

        Book.findByIdAndDelete(id)
            .then((result) => {
                res.json({ redirect: '/book-store' });
            })
            .catch((err) => {
                console.log(err);
            })
};