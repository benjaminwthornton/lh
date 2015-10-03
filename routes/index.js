var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'LyteHacks' });
});

router.get('/schedule', function(req, res) {
  res.render('schedule');
});

router.get('/sponsor', function(req, res) {
  res.render('sponsor');
});

router.get('/1_1', function(req, res) {
  res.render('1_1');
});

router.get('/1_2', function(req, res) {
  res.render('1_2');
});

module.exports = router;
