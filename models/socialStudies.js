module.exports = function(sequelize, DataTypes) {
  var SocialStudies = sequelize.define("SocialStudies", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return SocialStudies;
};
