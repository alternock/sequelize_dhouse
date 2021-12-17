const { Sequelize } = require("sequelize");
const log = console.log;

const connect = new Sequelize("digitalhouse", "root", null, {
  host: "localhost",
  dialect: "mysql"
});


async function checkConnect(connect) {
  try {
    await connect.authenticate();
    log("connect true");
  } catch (err) {
    log("error / checkConnect: ", err);
  }
}


async function connectSync(option, connect) {
  try {
    await connect.sync({ force: option});
    log("sync ok");
  } catch (err) {
    log("error: ", err);
  }
}


module.exports = {
  connect,
  Sequelize,
  checkConnect,
  connectSync
};