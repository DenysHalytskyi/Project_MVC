const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');

router.get('/', filmController.getFilms);
router.post('/add', filmController.addFilm);
router.get('/add', (req, res) => {
  res.render('addFilm');
});
router.get('/edit/:id', filmController.editFilm);
router.post('/update/:id', filmController.updateFilm);
router.post('/delete/:id', filmController.deleteFilm);

module.exports = router;
