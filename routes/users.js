var express = require('express');
var router = express.Router();

// link to my existing Account model
let Account = require('../models/account');

// passport
let passport = require('passport');

// authentification
function isLoggedIn(req, res, next) {
   if (req.isAuthenticated()) {
      return next();  // user has logged in already so continue to the next function
   }
   res.redirect('/login');
}

router.get('/accounts', isLoggedIn, function(req, res, next) {

   Account.find(function(err, accounts) {
      if (err) {
         console.log(err);
         res.end(err);
         return;
      }


      res.render('accounts', {
        title: 'User list',
        accounts: accounts,
        user: req.user
      });
   });
});

module.exports = router;