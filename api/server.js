const express = require("express");

const server = express();
const serverConfig = require("./serverConfig");
//middleware
serverConfig(server);

//routes

// endpoints

// server.get("/", (req, res) => {
//   res.render("home");
// });

module.exports = server;
