'use strict';
module.exports = (sequelize, DataTypes) => {
  const Camera = sequelize.define('Camera', {
    cameraId: DataTypes.NUMBER,
    date: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Camera.associate = function(models) {
    // associations can be defined here
  };
  return Camera;
};