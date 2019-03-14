var express = require('express');
var router = express.Router();
var customer = require('../models/customerModel.js');

router.get('/', function (req, res, next) {
  customer.find(function (err, customers) {
    if (err) return next(err);
    res.json(customers);
  });
});

router.get('/:id', function (req, res, next) {
  customer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/', function (req, res, next) {
  customer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next){
  customer.findByIdAndUpdate(req.params.id, req.body, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})

router.delete('/:id', function(req, res, next){
  customer.findByIdAndDelete(req.params.id, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})
module.exports = router;
