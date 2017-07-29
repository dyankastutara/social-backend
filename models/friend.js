'use strict';
module.exports = function(sequelize, DataTypes) {
  var Friend = sequelize.define('Friend', {
    id_user: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Friend;
};