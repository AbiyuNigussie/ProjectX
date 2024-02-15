const dbConfig = require("../db.config");

const { Sequelize } = require("sequelize");
const UserCredential = require("./UserCredential");
const User = require("./User");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// UserCredential.hasOne(User);
// User.belongsTo(UserCredential);

module.exports = sequelize;
