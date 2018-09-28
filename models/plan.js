module.exports = function(sequelize, DataTypes) {
  var Plan = sequelize.define("Plan", {
    author: DataTypes.STRING,
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
  Plan.associate = function(models) {
    Plan.belongsToMany(models.User, { through: models.UserPlan } );
  };
  return Plan;
};
