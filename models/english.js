module.exports = function(sequelize, DataTypes) {
  var English = sequelize.define("English", {
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
  return English;
};
