const express = require("express");
const {
  connect,
  checkConnect: verifyConnectToDatabase,
  connectSync
} = require("./configs/database_config");
const {createAvatarCTRL} = require("./controllers/avatars.ctrl");
const app = express();
const cors = require("cors");
const log = console.log;

verifyConnectToDatabase(connect);
connectSync(false, connect);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/avatar", createAvatarCTRL);



app.listen(3000, () => {
  log("start connect");
});
