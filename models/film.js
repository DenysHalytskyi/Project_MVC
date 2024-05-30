let films = [];

module.exports = {
  getAllFilms: () => films,

  getFilmById: (id) => {
    console.log('All films:', films);
    const foundFilm = films.find(film => film.id === +id);
    console.log('Found film:', foundFilm);
    return foundFilm;
  },

  addFilm: (film) => {
    if (!Array.isArray(film.reviews)) {
      film.reviews = [film.reviews];
    }
    films.push(film);
  },

  updateFilm: (id, updatedFilm) => {
    const index = films.findIndex(film => film.id === id);
    if (index !== -1) {
      films[index] = updatedFilm;
      if (!Array.isArray(updatedFilm.reviews)) {
        updatedFilm.reviews = [updatedFilm.reviews];
      }
    }
  },

  deleteFilm: (id) => {
    films = films.filter(film => film.id !== id);
  }
};
