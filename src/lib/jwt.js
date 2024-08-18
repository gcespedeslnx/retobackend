const jsonwebtoken = require("jsonwebtoken");

const secret = process.env.JWT_TOKEN;

function sign(payload){
    return jsonwebtoken.sign(payload, secret, { expiresIn: "1d" });
}

function verify (token, secret){
    return jsonwebtoken.verify(token, secret);
}

module.exports = {
    sign,
    verify,
}