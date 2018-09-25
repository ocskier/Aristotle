module.exports = function(sequelize, DataTypes) {
  var Math = sequelize.define("Math", {
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
  return Math;
};
