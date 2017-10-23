const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/about',
      failureRedirect: '/'
    })
  );

  app.get('/api/logout', (req, res) => {
    console.log(req.user);
    req.logout();
    console.log(req.user);
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
