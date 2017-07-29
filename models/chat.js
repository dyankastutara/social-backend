'use strict';
module.exports = function(sequelize, DataTypes) {
  var Chat = sequelize.define('Chat', {
    friend_id: DataTypes.INTEGER,
    text_chat: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  });
  return Chat;
};