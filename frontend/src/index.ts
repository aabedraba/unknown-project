import express from "express";

const server = express();

server.get("/", (req, res) => {
  return res.send("Hello world!");
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log("Listening on http://localhost:" + port);
});
