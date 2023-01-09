import { UserModule } from "../models/user.js";

export const getALLUser = async (req, res) => {
  const User = await UserModule.findAll({ where: {} });
  return res.send({ User });
};

export const getUserid = async (req, res) => {
  const id = req.params.id;
  const User = await UserModule.findByPk(id);
  if (User === null) {
    res.send("Não existe user com id: " + id);
  }
  res.send({ Produtos });
};

export const newUser = async (req, res) => {
  const newUser = {
    user: req.body.user,
    password: req.body.password,
    admin: req.body.admin
  };
  await UserModule.create(newUser);

  res.send({ newUser });
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const UserUpdated = {
    user: req.body.user,
    password: req.body.password,
    admin: req.body.admin
  };
  const User = await UserModule.findByPk(id);
  if (User !== null) {
    User.update(UserUpdated);
    return res.send("Credenciais atualizadas");
  } else {
    return res.send("Não existe user com id: " + id);
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const User = await UserModule.findByPk(id);
  if (User !== null) {
    User.destroy({ where: { id: id } });
    return res.send("Credenciais removidas");
  } else {
    return res.send("Não existe user com id: " + id);
  }
};
