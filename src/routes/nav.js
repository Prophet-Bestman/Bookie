const express = require("express");
const navRouter = express.Router();
const navController = require('../../controllers/navController')

navRouter.get('/home', navController.nav_home);

navRouter.get('/about', navController.nav_about);

navRouter.get('/books', navController.nav_books);

navRouter.get('/contact', navController.nav_contact);

module.exports = navRouter