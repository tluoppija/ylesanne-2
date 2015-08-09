Romil
25828528528252528 ouvh  var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');

router.get('/', restrict, function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  } kjhk gj
  var vm = {
    title: 'Home'
module.exports = router;

hello
