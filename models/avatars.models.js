const {connect, Sequelize} = require("../configs/database_config");

let Avatars = connect.define(
    "avatars",
    {
      id: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
      name: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false },
      country: { type: Sequelize.STRING, allowNull: false }
    },
    {
      timestamps: false
    }
  );
  
  module.exports = Avatars;