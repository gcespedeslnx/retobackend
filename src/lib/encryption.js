const bcrypt = require("bycryptjs");

const SALT_ROUNDS = 10;

function encrypt(plainText){
      return bcrypt.hashSync(plainText);
}

function compare (plainText, hash){
    return bcrypt.compareSync(plainText, hash);
}

module.exports = {
  encrypt,
  compare,
}
