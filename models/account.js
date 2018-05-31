var mongoose = require('mongoose')
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
  email : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true 
  }
});

//This is called a pre-hook, before the user information is saved in the database
//this function will be called, we'll get the plain text password, hash it and store it.
AccountSchema.pre('save', async function(next){
    //'this' refers to the current document about to be saved
    var user = this;
    //Hash the password with a salt round of 10, the higher the rounds the more secure, but the slower
    //your application becomes.
    var hash = await bcrypt.hash(this.password, 10);
    //Replace the plain text password with the hash and then store it
    this.password = hash;
    //Indicates we're done and moves on to the next middleware
    next();
  });
  
  //We'll use this later on to make sure that the user trying to log in has the correct credentials
  AccountSchema.methods.isValidPassword = async function(password){
    var user = this;
    //Hashes the password sent by the user for login and checks if the hashed password stored in the 
    //database matches the one sent. Returns true if it does else false.
    var compare = await bcrypt.compare(password, user.password);
    return compare;
  }
  
  var AccountModel = mongoose.model('account',AccountSchema);
  
  module.exports = AccountModel;