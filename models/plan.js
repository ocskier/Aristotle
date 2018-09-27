module.exports = function(sequelize, DataTypes) {
  var Plan = sequelize.define("Plan", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    subject: DataTypes.STRING,
    grade: DataTypes.STRING,
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    }
  });
  return Plan;
};
