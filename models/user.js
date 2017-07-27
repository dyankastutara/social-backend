'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    deleted: DataTypes.BOOLEAN,
    id_detail_user: DataTypes.INTEGER
  });

  // User.associate = (models)=>{
  //   User.belongsTo(models.DetailUser, {foreignKey: 'id_detail_user'})
  // }
  return User;
};