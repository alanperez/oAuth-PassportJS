// creates an instance of the express router
const router = require('express').Router();
// passport
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope:["profile"]
}));

// callback route for google to redirect to
router.get('/google/redirect',(req,res) => {
    res.send('You reached the callback URL');
})
//auth with facebook
router.get('/facebook', passport.authenticate('facebook', {
    scope:['read_stream']
}));
module.exports = router;