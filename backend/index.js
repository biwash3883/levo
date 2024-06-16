const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const atlasConnectionUri = "mongodb://localhost:27017";

mongoose.connect(atlasConnectionUri, {
  dbName: "levo",
});

app.use(
  cors({
    origin: ["deployed-vercel-frontend-app", "localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(bodyParser.json());

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB Atlas");
  app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
});

app.get("/", (req, res) => {
  res.json("Hello form LEVO");
});
