const chai = require('chai');
const chaiHttp = require('chai-http');
const crypto = require('crypto');
require('dotenv').config();

const server = require('../app');
const models = require('../models');
chai.use(chaiHttp);

describe('User Test', ()=>{
	describe('Create User', ()=>{
		it('Should return be all field / property when trying to signup or Create User',(done)=>{
			done()
		})
	})
})
// var crypto = require('crypto'),
//     algorithm = 'aes-256-ctr',
//     password = 'd6F3Efeq';

// function encrypt(text){
//   var cipher = crypto.createCipher(algorithm,password)
//   var crypted = cipher.update(text,'utf8','hex')
//   crypted += cipher.final('hex');
//   return crypted;
// }
 
// function decrypt(text){
//   var decipher = crypto.createDecipher(algorithm,password)
//   var dec = decipher.update(text,'hex','utf8')
//   dec += decipher.final('utf8');
//   return dec;
// }
 
// var hw = encrypt("hello world")
// // outputs hello world
// console.log(decrypt(hw));