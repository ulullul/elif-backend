'use strict';
module.exports = (sequelize, DataTypes) => {
  const Camera = sequelize.define('Camera', {
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    snapshot: DataTypes.STRING
  }, {});
  Camera.associate = function(models) {
    // associations can be defined here
  };
  return Camera;
};