const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys.js');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  console.log(user);
  console.log('user serialized');
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((err, user) => {
    console.log('err', err);
    console.log('user', user);
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
      new User({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value
      })
        .save()
        .then(user => done(null, user));
      // console.log('');
      // console.log(profile.id);
      // console.log('');
      // console.log(User.findOne({ googleId: profile.id }));
      // User.findOne({ googleId: profile.id }).then(existingUser => {
      //   console.log('Here 2 in passport.js');
      //   if (existingUser) {
      //     console.log('Here 3 in passport.js');
      //     // we already have a User with the given profile ID
      //     done(null, existingUser);
      //   } else {
      //     console.log('Here 4 in passport.js');
      //     // make a new User
      //     new User({
      //       googleId: profile.id,
      //       name: profile.displayName,
      //       email: profile.emails[0].value
      //     })
      //       .save()
      //       .then(user => done(null, user));
      //   }
      // });
    }
  )
);
