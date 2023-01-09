import { ProdutosModule } from "../models/produtos.js";

export const getALLProdutos = async (req, res) => {
  const Produtos = await ProdutosModule.findAll({ where: {} });
  return res.send({ Produtos });
};

export const getProdutosid = async (req, res) => {
  const id = req.params.id;
  const Produtos = await ProdutosModule.findByPk(id);
  if (Produtos === null) {
    res.send("Não existe Produto com id: " + id);
  }
  res.send({ Produtos });
};

export const newProdutos = async (req, res) => {
  const newProdutos = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  };
  await ProdutosModule.create(newProdutos);

  res.send({ newProdutos });
};

export const updateProdutos = async (req, res) => {
  const id = req.params.id;
  const ProdutosUpdated = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  };
  const Produtos = await ProdutosModule.findByPk(id);
  if (Produtos !== null) {
    Produtos.update(ProdutosUpdated);
    return res.send("Produto atualizado");
  } else {
    return res.send("Não existe Produto com id: " + id);
  }
};

export const deleteProdutos = async (req, res) => {
  const id = req.params.id;
  const Produtos = await ProdutosModule.findByPk(id);
  if (Produtos !== null) {
    Produtos.destroy({ where: { id: id } });
    return res.send("Produto removido");
  } else {
    return res.send("Não existe Produto com id: " + id);
  }
};
