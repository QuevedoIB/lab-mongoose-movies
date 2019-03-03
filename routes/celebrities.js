'use strict';

const express = require('express');
const router = express.Router();
const Celebrities = require('../models/Celebrities');
const Movies = require('../models/Movies');

router.get('/celebrities', async (req, res, next) => {
  const celebrities = await Celebrities.find();
  try {
    res.render('../views/celebrities/index.hbs', { celebrities });
  } catch (error) {
    next(error);
  }
});

router.get('/movies', async (req, res, next) => {
  const movies = await Movies.find();
  try {
    res.render('../views/movies/index.hbs', { movies });
  } catch (error) {
    next(error);
  }
});

router.get('/movies/new', async (req, res, next) => {
  res.render('../views/movies/new.hbs');
});

router.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movies.findById(id);
    res.render('../views/movies/show.hbs', movie);
  } catch (error) {
    next(error);
  }
});

router.get('/movies/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movies.findById(id);
    res.render('../views/movies/new.hbs', movie);
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
      await Celebrities.findByIdAndUpdate(_id, newCelebrity);
    } else {
      await Celebrities.create(newCelebrity);
    }
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.post('/delete/celebrity', async (req, res, next) => {
  const { _id } = req.body;
  try {
    await Celebrities.findByIdAndDelete(_id);
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});

router.post('/movies/new', async (req, res, next) => {
  const { _id, title, genre, plot } = req.body;
  const newMovie = { title, genre, plot };
  try {
    if (_id) {
      await Movies.findByIdAndUpdate(_id, newMovie);
    } else {
      await Movies.create(newMovie);
    }
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.post('/delete/movie', async (req, res, next) => {
  const { _id } = req.body;
  try {
    await Movies.findByIdAndDelete(_id);
    res.redirect('/movies');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
