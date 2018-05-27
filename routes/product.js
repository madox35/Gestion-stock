var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get('/', function(req, res, next) {
    Product.find(function(err, products) {
        if (err)
            res.send(err);

        res.json(products);
    });
});

router.post('/',function(req, res) {

  var product = new Product();
  product.name = req.body.name;
  
  product.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'product created!' });
  });
});

router.get('/:product_id',function(req, res){

  Product.findById(req.params.product_id, function(err, product) {
      if (err)
          res.send(err);
      res.json(product);
  });
});

router.put('/:product_id',function(req, res) {

  Product.findById(req.params.product_id, function(err, product) {

      if (err)
          res.send(err);

      product.name = req.body.name;

      product.save(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'product updated!' });
      });
  });
});


router.delete('/:product_id',function(req, res) {
  Product.remove({
      _id: req.params.product_id
  }, function(err, bear) {
      if (err)
          res.send(err);

      res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;
