'use strict';

const express = require('express');
const router = express.Router();
const Celebrities = require('../models/Celebrities');

router.get('/celebrities', async (req, res, next) => {
  const celebrities = await Celebrities.find();
  try {
    res.render('../views/celebrities/index.hbs', { celebrities });
  } catch (error) {
    next(error);
  }
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('../views/celebrities/new');
});

router.get('/celebrities/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const celebrity = await Celebrities.findById(id);
    res.render('../views/celebrities/show.hbs', celebrity);
  } catch (error) {
    next(error);
  }
});

router.get('/celebrities/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const celebrity = await Celebrities.findById(id);
    res.render('../views/celebrities/new.hbs', celebrity);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const { _id, name, occupation, catchPhrase } = req.body;
  const newCelebrity = { name, occupation, catchPhrase };
  try {
    if (_id) {
      console.log(_id);
      await Celebrities.findByIdAndUpdate(_id, newCelebrity);
    } else {
      await Celebrities.create(newCelebrity);
    }
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.post('/delete', async (req, res, next) => {
  const { _id } = req.body;
  try {
    await Celebrities.findByIdAndDelete(_id);
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
