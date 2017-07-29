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


// 'use strict';

// const crypto = require('crypto');

// const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Must be 256 bytes (32 characters)
// const IV_LENGTH = 16; // For AES, this is always 16

// function encrypt(text) {
//  let iv = crypto.randomBytes(IV_LENGTH);
//  let cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
//  let encrypted = cipher.update(text);

//  encrypted = Buffer.concat([encrypted, cipher.final()]);

//  return iv.toString('hex') + ':' + encrypted.toString('hex');
// }

// function decrypt(text) {
//  let textParts = text.split(':');
//  let iv = new Buffer(textParts.shift(), 'hex');
//  let encryptedText = new Buffer(textParts.join(':'), 'hex');
//  let decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
//  let decrypted = decipher.update(encryptedText);

//  decrypted = Buffer.concat([decrypted, decipher.final()]);

//  return decrypted.toString();
// }

// module.exports = { decrypt, encrypt };