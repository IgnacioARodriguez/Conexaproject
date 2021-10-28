var express = require('express');
var router = express.Router();
let axios = require('axios');
// const validateToken = require('../utils/jwtValidation');
const validateToken = require('../utils/jwtValidation');

/* GET users listing. */

router.get('/', validateToken, function (req, res, next) {
    console.log(req.params.pagination)
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then((data) => res.send(data.data))
        .catch((e) => console.log(e))
});

router.get('/:pagination', validateToken, function (req, res, next) {
    axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${req.params.pagination}`)
        .then((data) => res.send(data.data))
        .catch((e) => console.log(e))
});

module.exports = router;
