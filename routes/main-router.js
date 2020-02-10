const AuthenticationRoutes = require('./authentication-router');

module.exports = function(app) {
    app.use('/users', AuthenticationRoutes);
  };