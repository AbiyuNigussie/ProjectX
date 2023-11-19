const express = require("express");
const { sequelize } = require("./models");
const cors = require("cors");
require("dotenv").config();
// Import Routes
const authRoute = require("./routes/auth");

const app = express();
// console.log(process.env.TOKENSECRET);

// MiddleWare
app.use(express.json());
app.use(cors());
// Route MiddleWares
app.use("/api/user/", authRoute);

// Route
app.get("/api", (req, res) => {
  res.send({ message: "this is the root path!" });
});

// Database Connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => [console.log({ error: err })]);

// Server Port
const PORT = 3030;

// Server Listening
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});
