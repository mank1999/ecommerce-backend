import { DataTypes } from "sequelize";
import sequelize from "./connection.js";

// Define User model
const User = sequelize.define(
  "UserData",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "UserData", // DB table name
    timestamps: true, // adds createdAt & updatedAt
  }
);

export default User;
