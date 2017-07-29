'use strict';
module.exports = function(sequelize, DataTypes) {
  var Friend = sequelize.define('Friend', {
    relating_user_id: DataTypes.INTEGER,
    related_user_id: DataTypes.INTEGER,
    type: DataTypes.STRING
  });
  return Friend;
};