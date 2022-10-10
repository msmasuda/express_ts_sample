import passport from 'passport';
// import dotenv from 'dotenv';
import { Strategy as JWTStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';

// if (process.env['NODE_ENV'] !== 'production') {
//   dotenv.config();
// }

// passport-jwtの設定
const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret-jwt-hokuren',
};

passport.use(
  new JWTStrategy(opts, (jwt_payload, done) => {
    done(null, jwt_payload);
  })
);

export default passport;
