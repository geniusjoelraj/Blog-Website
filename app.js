const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const port = 3000 || process.env.PORT;

const app = express();

bodyParser.urlencoded({extended: true});
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get("/", function(req, res) {
  res.render("index.ejs");
});

app.listen(3000, function() {
  console.log("Server is running on port "+port);
});

