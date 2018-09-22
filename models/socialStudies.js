module.exports = function(sequelize, DataTypes) {
  var SocialStudies = sequelize.define("SocialStudies", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    grade: DataTypes.STRING,
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    }
  });
  return SocialStudies;
};
