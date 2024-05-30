const Film = require('../models/film');

exports.getAllFilms = (req, res) => {
  res.render('index', { films: Film.getAllFilms() });
};

exports.getFilmById = (req, res) => {
  const film = Film.getFilmById(req.params.id);
  if (film) {
    res.render('editFilm', { film });
  } else {
    res.redirect('/');
  }
};

exports.addFilm = (req, res) => {
  const newFilm = {
    id: Date.now(), // Unikalny ID
    title: req.body.title,
    director: req.body.director,
    rating: req.body.rating,
    watched: req.body.watched === 'on',
    review: req.body.review
  };
  Film.addFilm(newFilm);
  res.redirect('/');
};

exports.updateFilm = (req, res) => {
  const updatedFilm = {
    id: parseInt(req.params.id, 10),
    title: req.body.title,
    director: req.body.director,
    rating: req.body.rating,
    watched: req.body.watched === 'on',
    review: req.body.review
  };
  Film.updateFilm(parseInt(req.params.id, 10), updatedFilm);
  res.redirect('/');
};

exports.deleteFilm = (req, res) => {
  Film.deleteFilm(parseInt(req.params.id, 10));
  res.redirect('/');
};
