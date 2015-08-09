var env = process.env.NODE_ENV || 'development';
var cfg = require('../config/config.json')[env];
var Sequelize = require('sequelize');

module.exports = new Sequelize(
    cfg.database
    ,cfg.username
    ,cfg.password
    ,
    {
      host: 'localhost',
      dialect: 'postgres',
      pool:
        {
          max: 5,
          mim: 0,
          idle: 1000
        }
    }
);
