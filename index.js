const config = require("config");
const mongoose = require("mongoose");
const users = require("./routes/users");
const auth = require("./routes/auth");
const customers = require("./routes/customers");

const express = require("express");
const app = express();

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/sampledb")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MondoDB..."));

app.use(express.json());
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/customers", customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
