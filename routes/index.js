const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name });
    } else {
        res.redirect('/hello')
    }
});

router.get('/cards', (req, res) => {
    res.render('card', {
        prompt: "Who is buried in Grant's tomb?",
        colors: colors
        // hint: "Think about whose tomb it is..."
    })
});

router.get('/hello', (req, res) => {
    res.render('hello')
});

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/')
});

module.exports = router;