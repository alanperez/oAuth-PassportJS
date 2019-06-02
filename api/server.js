const express = require("express");
const server = express();
const serverConfig = require("./serverConfig");

//middleware
serverConfig(server);

//routes
const authRoutes = require('../controllers/auth-routes')
server.use('/auth', authRoutes);
// endpoints

// server.get("/", (req, res) => {
//   res.render("home");
// });

module.exports = server;
