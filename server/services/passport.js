const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys.js');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((err, user) => {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // we already have a User with the given profile ID
          done(null, existingUser);
        } else {
          // make a new User
          new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
