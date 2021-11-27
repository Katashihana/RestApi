__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})
router.get('/changelog', (req, res) => {
    res.sendFile(__path + '/views/changelog.html')
})
router.get('/islam', (req, res) => {
    res.sendFile(__path + '/views/islami.html')
})
router.get('/downloader', (req, res) => {
    res.sendFile(__path + '/views/downloader.html')
})
router.get('/movie', (req, res) => {
    res.sendFile(__path + '/views/movie.html')
})
router.get('/textprome', (req, res) => {
    res.sendFile(__path + '/views/textprome.html')
})
router.get('/photooxy', (req, res) => {
    res.sendFile(__path + '/views/photooxy.html')
})
router.get('/ephoto', (req, res) => {
    res.sendFile(__path + '/views/ephoto.html')
})
router.get('/randomimage', (req, res) => {
    res.sendFile(__path + '/views/rimage.html')
})
router.get('/randomtext', (req, res) => {
    res.sendFile(__path + '/views/rtext.html')
})
router.get('/animanga', (req, res) => {
    res.sendFile(__path + '/views/animanga.html')
})
router.get('/information&news', (req, res) => {
    res.sendFile(__path + '/views/ingfo.html')
})
router.get('/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})
router.get('/creator', (req, res) => {
    res.sendFile(__path + '/views/maker.html')
})
router.get('/primbon', (req, res) => {
    res.sendFile(__path + '/views/primbon.html')
})
router.get('/stalking', (req, res) => {
    res.sendFile(__path + '/views/stalking.html')
})
router.get('/other', (req, res) => {
    res.sendFile(__path + '/views/other.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/api/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

module.exports = router
