const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook-oauth').Strategy;
passport.use(
    new GoogleStrategy({
        // options for google strategy
    }, () => {
        // passport callback function
    }),

    new FacebookStrategy({
        // options for google strategy
    }, () => {
        // passport callback function
    })
);