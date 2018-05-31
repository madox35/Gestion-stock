var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.post('/', function(req, res, next){

    passport.authenticate('login', async (err, account, info) => {  
      try {

        if(err || !account){
          var error = new Error('An error occured');
          return next(error);
        }

        req.login(account, { session : false }, function (error){
          if( error ) return next(error)
          //We don't want to store the sensitive information such as the
          //account password in the token so we pick only the email and id
          var body = { _id : account._id, email : account.email };
          //Sign the JWT token and populate the payload with the account email and id
          var token = jwt.sign({ account : body },'secret_key');
          //Send back the token to the account
          return res.json({ token });
        });   
      } 
      catch (error) {
        return next(error);
      }
    })(req, res, next);
});

module.exports = router;