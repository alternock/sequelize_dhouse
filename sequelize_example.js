const { Sequelize } = require("sequelize");
const log = console.log;

const connect = new Sequelize("digitalhouse", "root", null, {
  host: "localhost",
  dialect: "mysql"
});



async function connectSync() {
  try {
    await connect.sync({ force: false});
    log("sync ok");
  } catch (err) {
    log("error: ", err);
  }
}

let Avatars = connect.define(
  "avatars",
  {
    id: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false }
  },
  {
    timestamps: false
  }
);

async function createAvatar(){
  try{
  await Avatars.create({
    id:1000,
    name:"origin",
    email:"origin@origin.com"
  });

  log("creaateAvatar: true");
 }catch(err){
   log("err / createAvatar: ", err);
 }
}



checkConnect();
connectSync();

createAvatar();