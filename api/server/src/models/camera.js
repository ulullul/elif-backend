module.exports = (sequelize, DataTypes) => {
  const Camera = sequelize.define('Camera', {
    snapshot: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    faces: DataTypes.STRING
  }, {});
  return Camera;
};
