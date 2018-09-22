module.exports = function(sequelize, DataTypes) {
  var Math = sequelize.define("Math", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
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
