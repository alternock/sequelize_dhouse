const Avatars = require("../models/avatars.models");


const createAvatarCTRL = (req, res) => {
  let avatar = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    country: req.body.country
  };

  const cbSuccess = () => {
    res.json({
      msg: "create avatar true"
    });
  };

  const cbCatch = (error) => {
    res.json({ error });
  };

  Avatars.create(avatar).then(cbSuccess).catch(cbCatch);
};

module.exports = {
  createAvatarCTRL
};
