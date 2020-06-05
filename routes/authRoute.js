const passport = require('passport');
const jwt = require('jsonwebtoken');
const secretKey = 'secretKey';
const auth = require('../middleware/auth.js');

const express = require('express');
const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: false,
  }),
  function (req, res) {
    const user = req.user;
    jwt.sign({ user: user }, secretKey, (err, token) => {
      res.cookie('jwt', token);
      res.cookie('user', user);
      res.redirect('/');
    });
  }
);

router.get('/logout', auth, (req, res) => {
  res.redirect('/');
});

module.exports = router;
