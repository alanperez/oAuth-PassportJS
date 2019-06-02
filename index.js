const server = require("./api/server");
const port = process.env.PORT || 5000;

//set up view engine
server.set("view engine", "ejs");

// create home router
server.get("/", (req, res) => {
  res.render("home");
});



server.listen(port, () => {
  console.log(`Server is live at ${port}`);
});
