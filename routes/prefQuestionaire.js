var express = require('express');
var router = express.Router();
// var $ = require('jquery');

router.get('/', function(req, res, next) {
  res.render('prefQuestionaire', { title: 'Choose your preferences' });
});

module.exports = router;
