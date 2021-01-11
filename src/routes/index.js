const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        heading: 'The Power To Create Your World'
    });
});


module.exports = indexRouter