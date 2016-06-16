import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import cookieSession from 'cookie-session';

export const authSetup = app => {
  app.use(cookieSession({
    secret: process.env.SESSION_SECRET,
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, cb) => cb(null, user));
  passport.deserializeUser((obj, cb) => cb(null, obj));

  passport.use(
    new GoogleStrategy({
      clientID: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_SECRET,
      callbackURL: '/login/callback',
    },
      (token, refreshToken, profile, done) => {
        if (process.env.ALLOWED_DOMAIN === profile._json.domain) {
          return done(null, profile);
        }
        return done();
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
