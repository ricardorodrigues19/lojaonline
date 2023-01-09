import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const ProdutosModule = dbInstance.define("Produtos", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});
export { ProdutosModule };
