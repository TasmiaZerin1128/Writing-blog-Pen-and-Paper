const { Sequelize, DataTypes } = require("sequelize");
const {sequelize} = require("../db.config");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "Users",
  }
);

const test = async () => {
    await User.sync({ alter: true });
    console.log(await User.findAll());
};


test();

module.exports = User;