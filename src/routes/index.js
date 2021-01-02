const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        heading: 'Welcome to our book store'
    });
});


module.exports = indexRouter