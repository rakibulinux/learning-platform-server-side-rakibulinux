const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API Server is runing");
});

app.listen(port, () => console.log(`API server runnning on port: ${port}`));
