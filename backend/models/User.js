const { DataTypes } = require("sequelize");
const { sequelize } = require("./");
// const { roles } = require("../config");

const User = sequelize.define("User", {
  user_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
  },
  bio: {
    type: DataTypes.TEXT,
  },
  profile_picture_url: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
