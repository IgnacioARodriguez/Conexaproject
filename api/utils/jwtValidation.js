const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {

    const reqToken = req.headers.authorization.split(' ')[1];

    if (!reqToken) {
        return res.status(402).json({ msg: "no se envio el token" });
    }

    jwt.verify(reqToken, "conexa", (err, payload) => {
        if (err) return res.status(401).json({ msg: "el token no es valido" });

        req.payload = payload;
        next();
    });
};

module.exports = validateToken