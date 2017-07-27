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