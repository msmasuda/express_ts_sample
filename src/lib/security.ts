import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';

// passport-jwtの設定
const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret-jwt-quasarーsample',
};

passport.use(
  new JWTStrategy(opts, (jwt_payload, done) => {
    done(null, jwt_payload);
  })
);

export default passport;
