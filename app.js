const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));
app.use(express.text());
app.set("views", "./views");
app.set("view engine", "jade");

const clients = {};

io.on("connection", socket => {
  console.log("a user has connected");
  socket.on("startup", data => {
    //TODO verify client isn't already here, error handle
    clients[data.id] = socket.id;
  });
  socket.on("disconnect", () => {
    console.log("a user has disconnected");
  });
  socket.on("keydown", data => {
    console.log("keydown", data);
  });
  socket.on("keyup", data => {
    console.log("keyup", data);
  });
});

app.get("/", (req, res) => {
  res.locals.id = req.query.id || 1;
  res.render("index");
});

http.listen(80, () => {
  console.log("server up");
});