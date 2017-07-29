'use strict';
module.exports = function(sequelize, DataTypes) {
  var Chat = sequelize.define('Chat', {
    id_friend: DataTypes.INTEGER,
    text_chat: DataTypes.TEXT,
    id_user: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Chat;
};