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
} from "../controllers/user.js";

const routes = Router();

routes.get("/Produtos", getALLProdutos);
routes.get("/Produtos/:id", getProdutosid);
routes.post("/newProdutos", newProdutos);
routes.post("/updateProdutos/:id", updateProdutos);
routes.delete("/deleteProdutos/:id", deleteProdutos);

routes.get("/User", getALLUser);
routes.get("/User/:id", getUserid);
routes.post("/newUser", newUser);
routes.post("/updateUser/:id", updateUser);
routes.delete("/deleteUser/:id", deleteUser);

export { routes };
