const Film = require('../models/film');

let films = [];
let currentId = 1;

// Pobierz wszystkie filmy
exports.getFilms = (req, res) => {
  res.render('index', { films: films });
};

// Dodaj nowy film
exports.addFilm = (req, res) => {
  const newFilm = new Film(
    currentId++,
    req.body.title,
    req.body.director,
    req.body.rating,
    false,
    ''
  );
  films.push(newFilm);
  res.redirect('/');
};

// Edytuj film
exports.editFilm = (req, res) => {
  const film = films.find(f => f.id == req.params.id);
  res.render('editFilm', { film: film });
};

// Zaktualizuj film
exports.updateFilm = (req, res) => {
  const film = films.find(f => f.id == req.params.id);
  film.title = req.body.title;
  film.director = req.body.director;
  film.rating = req.body.rating;
  film.watched = req.body.watched === 'on';
  film.review = req.body.review;
  res.redirect('/');
};

// Usuń film
exports.deleteFilm = (req, res) => {
  films = films.filter(f => f.id != req.params.id);
  res.redirect('/');
};
