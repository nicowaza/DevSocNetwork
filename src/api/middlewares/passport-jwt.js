import Passport from 'passport';
import PassportJWT from 'passport-jwt';
import ExtractJwt from 'passport-jwt';
import keys from '../../config/keys';
import User from '../ressources/users/user-model';

export const configJWTStrategy = () => {
  const opts = {
    jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.secretOrKey,
  };
  Passport.use(
    new PassportJWT.Strategy(opts, (payload, done) => {
      User.findOne({
        _id: payload.id
      }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
    })
  );
};
