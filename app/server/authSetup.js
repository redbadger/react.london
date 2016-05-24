import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import session from 'express-session';
import serverConfig from '../serverConfig';

export const authSetup = app => {
  app.use(session({ secret: serverConfig.sessionSecret, resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, cb) => cb(null, user));
  passport.deserializeUser((obj, cb) => cb(null, obj));

  passport.use(
    new GoogleStrategy(
      { ...serverConfig.credentials, callbackURL: '/login/callback' },
      (token, refreshToken, profile, done) => {
        if (serverConfig.allowedDomainNames.includes(profile._json.domain)) {
          return done(null, profile);
        } else {
          return done();
        }
      }
    )
  );

  app.get('/login', passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get(
    '/login/callback',
    passport.authenticate(
      'google',
      { failureRedirect: 'http://www.red-badger.com' }
    ),
    (req, res) => res.redirect('/')
  );

  return app;
};
