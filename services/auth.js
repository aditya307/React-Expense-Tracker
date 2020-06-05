const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: '/login/auth/google/callback',
    },
    function (accessToken, refreshToken, Profile, cb) {
      User.findOne({
        googleId: Profile.id,
        Name: Profile.displayName,
        Email: Profile.emails[0].value,
        Image: Profile.photos[0].value,
      }).then((existingUser) => {
        if (existingUser) {
          // console.log('USer is:', existingUser);
          return cb(null, existingUser);
        } else {
          new User({
            googleId: Profile.id,
            Name: Profile.displayName,
            Email: Profile.emails[0].value,
            Image: Profile.photos[0].value,
          })
            .save()
            .then((newUser) => {
              console.log('New User Created' + newUser);
              return cb(null, newUser);
            });
        }
      });
    }
  )
);
