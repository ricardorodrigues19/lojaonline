import Sequelize from "sequelize";
// CREATE USER 'ricardor'@'%' IDENTIFIED BY 'password';
// GRANT ALL PRIVILEGES ON * . * TO 'ricardor'@'%';
const dbInstance = new Sequelize({
  host: "localhost",
  port: 3306,
  username: "ricardor",
  password: "password",
  database: "aw_loja",
  dialect: "mysql",
});

export { dbInstance };
