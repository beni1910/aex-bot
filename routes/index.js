/**
 * https://github.com/beni1910/aex-bot
 * Date: 05/09/20
 * index.js
**/

const express  = require('express');
const { Disk } = require('./../lib/index')
const { WEB }  = require('./../lib/web')
const cwa = new WEB()

const router = express.Router();

router.get('/', function (req, res, next) {
    disk().then(data => {
        const { free, size } = data
        cwa.Message((error, { uread, tread } = {}) => {
            res.render('index', {
                title: 'AEX BOT',
                free: free,
                size: size,
                uread: uread,
                tread: tread
           })
        })
    })
})

router.get('/profile', function (req, res, next) {
    cwa.Profile((error, { name, nomor, platform, version, os } = {}) => {
        res.render('profile', {
            title: 'PROFILE | BOT_STYLE',
            name: name,
            nomor: nomor,
            platform: platform,
            version: version,
            os: os
        })
    })
})

router.get('/spam-wa', function (req, res, next) {
    cwa.spamKey((error, { code } = {}) => {
        res.render('spam', {
            title: 'SPAM WA | BOT_STYLE',
            code: code
        })
    })
})

router.post('/spam-wa', (req, res, next) => {
    const { code, nomor, jumlah } = req.body

    cwa.spam(code, nomor, jumlah, (error, { errorM, message, code } = {}) => {
        res.render('spam', {
            title: 'SPAM WA | BOT_STYLE',
            error: errorM,
            message: message,
            code: code
        })
    })
})

router.get('/direct-chat', (req, res, next) => {
     res.render('dchat', {
        title: 'DIRECT CHAT WA | BOT_STYLE'
    })
})

router.post('/direct-chat', (req, res, next) => {
    const { nomor, pesan } = req.body

    cwa.MessagePrivate(nomor, pesan, (error, { errorM, message }) => {
        res.render('dchat', {
            title: 'DIRECT CHAT WA | BOT_STYLE',
            error: errorM,
            message: message
        })
    })
})

module.exports = router;
