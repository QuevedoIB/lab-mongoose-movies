'use strict';

const express = require('express');
const router = express.Router();
const Celebrities = require('../models/Celebrities');
const Movies = require('../models/Movies');
const data = require('../bin/seeds');
const moviesData = require('../bin/movies-seeds');

// // First time data added
// Celebrities.insertMany(data)
//   .then(response => console.log('Initial celebrities added'))
//   .catch(error => console.error(error));

// // First time movies data added
// Movies.insertMany(moviesData)
//   .then(result => console.log('Initial movies added'))
//   .catch(err => console.error(err));

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
