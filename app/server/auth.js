import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import session from 'express-session';
import serverConfig from '../serverConfig';

export function authSetup(app) {
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

  return {
    app,
    passport,
  };
};

export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};
