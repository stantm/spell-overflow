'use strict';
module.exports = (sequelize, DataTypes) => {
  const Upvote = sequelize.define('Upvote', {
    userId: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER
  }, {});
  Upvote.associate = function(models) {
    // associations can be defined here
    Upvote.belongsTo( models.User, { foreignKey: "userId" })
    Upvote.belongsTo( models.Answer, { foreignKey: "answerId" })
  };
  return Upvote;
};