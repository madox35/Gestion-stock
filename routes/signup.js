var express = require('express');
var passport = require('passport');
var router = express.Router();

//When the account sends a post request to this route, passport authenticates the account based on the
//middleware created previously
router.post('/',
  passport.authenticate('signup', { session : false }), 
  function (req, res, next){
    res.json({ 
      message : 'Signup successful',
      account : req.account 
    });
});

module.exports = router;