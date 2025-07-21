const express = require("express");
const app = express();

const PORT = process.env.PORT || 1234; // Use last 4 digits of roll no

app.get("/", (req, res) => {
  res.send("🚀 Hello from Node.js App!");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
