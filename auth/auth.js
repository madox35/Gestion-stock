var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var AccountModel = require('../models/account');

///////////////////////////////////////////////////
//                                               //
//            ENREGISTREMENT MIDDLEWARE          //
//                                               //
///////////////////////////////////////////////////

//Middleware pour l'enregistrement d'un nouveau compte
passport.use('signup', new localStrategy({
  usernameField : 'email',
  passwordField : 'password'
}, async (email, password, done) => {
    try {
      var user = await AccountModel.create({ email, password });
      return done(null, user);
    } catch (error) {
      done(error);
    }
}));



///////////////////////////////////////////////////
//                                               //
//            LOGIN MIDDLEWARE                   //
//                                               //
///////////////////////////////////////////////////
//Middleware lorsque l'utilisateur se connectera, on vérifira son compte
passport.use('login', new localStrategy({
  usernameField : 'email',
  passwordField : 'password'
}, async (email, password, done) => {
  try {
    //Find the user associated with the email provided by the user
    var user = await AccountModel.findOne({ email });
    if( !user ){
      //If the user isn't found in the database, return a message
      return done(null, false, { message : 'Utilisateur introuvable'});
    }
    //Validate password and make sure it matches with the corresponding hash stored in the database
    //If the passwords match, it returns a value of true.
    var validate = await user.isValidPassword(password);

    if( !validate ){
      return done(null, false, { message : 'Mot de passe incorrect'});
    }
    //Send the user information to the next middleware
    return done(null, user, { message : 'Connexion réussie'});
  } catch (error) {
      return done(error);
  }
}));



///////////////////////////////////////////////////
//                                               //
//            TOKEN VERIFICATION                 //
//                                               //
///////////////////////////////////////////////////
var JWTstrategy = require('passport-jwt').Strategy;
//We use this to extract the JWT sent by the user
var ExtractJWT = require('passport-jwt').ExtractJwt;

//This verifies that the token sent by the user is valid
passport.use(new JWTstrategy({
  //secret we used to sign our JWT
  secretOrKey : 'secret_key',
  //we expect the user to send the token as a query paramater with the name 'secret_token'
  jwtFromRequest : ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
  try {
    //Pass the user details to the next middleware
    console.log(token)
    return done(null, token.account);
  } 
  catch (error) {
    done(error);
  }
}));