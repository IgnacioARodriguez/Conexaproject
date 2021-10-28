var express = require('express');
var router = express.Router();
let axios = require('axios');
const validateToken = require('../utils/jwtValidation');


router.get('/', validateToken, function (req, res, next) {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((data) => res.send(data.data))
        .catch((e) => console.log(e))
});

module.exports = router;
