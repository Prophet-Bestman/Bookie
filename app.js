const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const dbURI = 'mongodb+srv://Prophet:ogwuchepman777@cluster1.hgcyb.mongodb.net/book-store?retryWrites=true&w=majority';
// connect to mongodb

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result =>     app.listen(5000, () => {
        console.log('Listening to Port 5000');
    })))
    .catch((err) => console.log(err))

// Static Files
app.use(express.static(__dirname + '/public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

// Templating Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use(morgan('dev'));


// Routes
const indexRouter = require('./src/routes/index');
app.use('/', indexRouter);

const navRouter = require('./src/routes/nav');
app.use('/', navRouter);

const bookRouter = require('./src/routes/book-store');
app.use('/', bookRouter);



// 404 Handler
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'error',
        heading: 'SORRY! PAGE NOT FOUND:('
    });
})

