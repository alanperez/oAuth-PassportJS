const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys')
const Users = require

// passport.use(
//     // new GoogleStrategy({
//     //     // options for google strategy
//     //     callbackURL:'/auth/google/redirect',
//     //     clientID: keys.google.clientID,
//     //     clientSecret: keys.google.clientSecret
//     // }, (accessToken,refreshToken,profile,done) => {
//     //     // passport callback function
//     //     console.log('passport callback function fired');
//     //     console.log(profile)
//     // }),

//     // new FacebookStrategy({
//     //     // options for google strategy
//     //     callbackURL:'/auth/facebook/redirect',
//     //     clientID: keys.facebook.clientID,
//     //     clientSecret: keys.facebook.clientSecret
//     // }, (accessToken, refreshToken, profile, done) => {
//     //     // passport callback function
//     //     // console.log('passport callback function fired');
//     //     console.log(profile)
//     // })
// );

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile)
  }
))

passport.serializeUser((user, done) => {
    done(null, user)
  })
  
  passport.deserializeUser((user, done) => {
    done(null, user)
  })