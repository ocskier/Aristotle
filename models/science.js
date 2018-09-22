module.exports = function(sequelize, DataTypes) {
  var Science = sequelize.define("Science", {
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
  return Science;
};
