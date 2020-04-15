'use strict';
module.exports = (sequelize, DataTypes) => {
  const Camera = sequelize.define('Camera', {
    snapshot: DataTypes.TEXT,
    date: DataTypes.TEXT
  }, {});
  Camera.associate = function(models) {
    // associations can be defined here
  };
  return Camera;
};