const crypto = require('crypto');
require('dotenv').config();

module.exports = {
	encrypt: function(text){
	  var cipher = crypto.createCipher(process.env.ALGORITHM,process.env.KEY)
	  var crypted = cipher.update(text,'utf8','hex')
	  crypted += cipher.final('hex');
	  return crypted;
	},
	decrypt: function(text){
		var decipher = crypto.createDecipher(process.env.ALGORITHM,process.env.KEY)
	  var dec = decipher.update(text,'hex','utf8')
	  dec += decipher.final('utf8');
	  return dec;
	}
}