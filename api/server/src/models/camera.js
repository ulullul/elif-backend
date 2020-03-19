'use strict';
module.exports = (sequelize, DataTypes) => {
  const camera = sequelize.define('camera', {
    date: DataTypes.STRING,
    snapshot: DataTypes.STRING
  }, {});
  camera.associate = function(models) {
    // associations can be defined here
  };
  return camera;
};