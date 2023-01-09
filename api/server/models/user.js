import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const UserModule = dbInstance.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});
export { UserModule };