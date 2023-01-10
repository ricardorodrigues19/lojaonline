import Router from "express";

import {
  getALLProdutos,
  getProdutosid,
  newProdutos,
  updateProdutos,
  deleteProdutos,
} from "../controllers/produtos.js";

import {
  getALLUser,
  getUserid,
  newUser,
  updateUser,
  deleteUser,
  login
} from "../controllers/user.js";

import { authRequired } from "../utils/jwt.js";

const routes = Router();

routes.get("/Produtos", getALLProdutos);
routes.get("/Produtos/:id", getProdutosid);
routes.post("/newProdutos", newProdutos);
routes.post("/updateProdutos/:id", updateProdutos);
routes.delete("/deleteProdutos/:id", deleteProdutos);

routes.get("/", getALLUser);
routes.get("/me", getUserid);
routes.post("/newUser", newUser);
routes.post("/updateUser/:id", updateUser);
routes.delete("/deleteUser/:id", deleteUser);
routes.post("/auth", login);

export { routes };
