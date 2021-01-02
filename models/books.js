const mongoose = require('mongoose');
const express = require('express')
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true    
    },

}, { timestamps: true });



const Book = mongoose.model('Book', bookSchema);

module.exports = Book;