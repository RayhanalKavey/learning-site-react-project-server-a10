const express = require("express");
const cors = require("cors");
port = process.env.PORT || 5005;

const app = express();
app.use(cors());
const tutorials = require("./data/tutorials.json");

app.get("/", (req, res) => {
  res.send("Data is coming.");
});
app.get("/tutorials", (req, res) => {
  res.send(tutorials);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
