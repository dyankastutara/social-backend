const models = require('../models');

module.exports = {
	getAllUsers : (req, res) => {
		models.User.findAll()
		.then(response=>{
			res.status(200);
			res.json(response);
		})
		.catch(err=>{
			res.status(500);
			res.json(err);
		});
	},
	getUserById : (req, res) => {
		models.User.findOne({
			where:{
				id: req.params.id
			}
		})
		.then(response=>{
			res.status(200);
			res.json(response);
		})
		.catch(err=>{
			res.status(500);
			res.json(err);
		});
	},
	getUserByUsername : (req, res) => {
		models.User.findOne({
			where:{
				username: req.body.finduser
			}
		})
		.then(response=>{
			res.status(200);
			res.json(response);
		})
		.catch(err=>{
			res.status(500);
			res.json(err)
		});
	},
	getUserByEmail : (req, res) => {
		models.User.findOne({
			where:{
				email: req.body.findemail
			}
		})
		.then(response=>{
			res.status(200);
			res.json(response);
		})
		.catch(err=>{
			res.status(500);
			res.json(err);
		})
	},
	registerUser : (req, res) => {
		let finalResult = {
      id: null,
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      gender: '',
      active: false,
      delete: false,
      success: false,
      message: ''
		}
		models.User.create({
			first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      gender: req.body.gender,
      active: true,
      delete: false
		})
		.then(response=>{
			finalResult.id = response.dataValues.id;
			finalResult.first_name = response.dataValues.first_name,
      finalResult.last_name = response.dataValues.last_name,
      finalResult.username = response.dataValues.username,
      finalResult.email = response.dataValues.email,
      finalResult.gender = response.dataValues.gender,
      finalResult.active = response.dataValues.active,
      finalResult.delete = response.dataValues.delete,
      finalResult.success = true,
      finalResult.message = 'Register New User Success'
			res.status(200);
			res.json(finalResult);
		})
		.catch(err=>{
      finalResult.message = 'Register New User Failed'
			res.status(500);
			res.json(finalResult)
		})
	}
}