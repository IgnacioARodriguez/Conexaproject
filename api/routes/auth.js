var express = require('express');
var router = express.Router();
let axios = require('axios');
const { user } = require('../models');
const jwt = require('jsonwebtoken')

router.post('/register', (req, res, next) => {
    user.create(req.body)
        .then((user) => res.status(201).json(user))
        .catch((next))
})

router.post('/login', (req, res, next) => {
    const { email, password } = req.body
    user.findOne({
        where: {
            email,
        }
    }).then((user) => {
        if (!user) {
            return res.status(400).send('usuario no encontrado')
        }
        user.validPassword(password, user.salt)
            .then((data) => {
                if (data) {
                    const token = jwt.sign({ id: user.id }, 'conexa', { expiresIn: 1000 })
                    return res.status(200).json({ token })
                } else {
                    return res.status(401).send('credenciales invalidas')
                }
            })
    })
        .catch((e) => console.log(e))
})


module.exports = router;
