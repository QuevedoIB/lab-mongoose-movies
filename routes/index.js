'use strict';

const express = require('express');
const router = express.Router();
const Celebrities = require('../models/Celebrities');
const data = require('../bin/seeds');

Celebrities.insertMany(data)
  .then(response => console.log('Data added'))
  .catch(error => console.error(error));

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
