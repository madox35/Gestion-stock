var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get('/', function(req, res, next) {
    Product.find(function(err, products) {
        if (err)
            res.send(err);

        // res.json(products);
        res.render('products/index',{
          products : products
        });
    });    
});

router.post('/',function(req, res) {

    var product = new Product();
    product.nom             = req.body.nom;
    product.date            = req.body.date;
    product.emprunte_par    = req.body.emprunte_par;
    product.comments        = req.body.comments;

    product.save(function(err) {
        if (err)
            res.send(err);

        res.render('products/index',{
            product : product
        });
    });
});

router.get('/:product_id',function(req, res){

    Product.findById(req.params.product_id, function(err, product) {
        if (err)
            res.send(err);
        res.render("../products/show_one", {product: product});
    });
});

router.put('/:product_id',function(req, res) {

    Product.findById(req.params.product_id, function(err, product) {

        if (err)
            res.send(err);

        product.nom = req.body.nom;

        product.save(function(err) {
            if (err)
                res.send(err);

            res.render('../products/index');
        });
    });
});


router.delete('/:product_id',function(req, res) {
    Product.remove({
        _id: req.params.product_id
    }, function(err, bear) {
        if (err)
            res.send(err);

        res.render('../products/index');
    });
});

module.exports = router;
