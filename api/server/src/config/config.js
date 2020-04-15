require('dotenv').config();


module.exports = {

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: 'camera_view',
    username: 'andri',
    password: 'bvzbvz1010',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    database: 'school',
    username: 'postgres',
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    use_env_variable: 'DATABASE_URL',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
