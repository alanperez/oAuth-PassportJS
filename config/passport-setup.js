const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook-oauth').Strategy;
const keys = require('./keys')

passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL:'/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken,refreshToken,profile,done) => {
        // passport callback function
        console.log('passport callback function fired');
        console.log(profile)
    }),

    // new FacebookStrategy({
    //     // options for google strategy
    //     callbackURL:'/auth/facebook/redirect',
    //     AppID: keys.facebook.clientID,
    //     AppSecret: keys.facebook.clientSecret
    // }, () => {
    //     // passport callback function
    // })
);