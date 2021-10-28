var express = require('express');
var router = express.Router();
let users = require('./users')
let posts = require('./posts')
let photos = require('./photos')
let auth = require('./auth')


router.use("/posts", posts);
router.use("/photos", photos);
router.use('/auth', auth)

module.exports = router;
