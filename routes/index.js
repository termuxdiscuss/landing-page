var express = require('express');
var router = express.Router();

/* Beranda */
router.get('/', function(req, res, next) {
  const judul = {title: 'Beranda || TDP TEAM'}
  res.render('index', judul)
});

/* Contact */
router.get('/contact', function(req, res, next) {
  const judul = {title: 'Hubungi || TDP TEAM'}
  res.render('contact', judul)
});

/* Tentang */
router.get('/about', function(req, res, next) {
  const judul = {title: 'Tentang || TDP TEAM'}
  res.render('about', judul)
});

module.exports = router;
