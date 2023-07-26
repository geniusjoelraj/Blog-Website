const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const port = 3000 || process.env.PORT;

const app = express();

bodyParser.urlencoded({extended: true});
app.set('view engine', 'ejs');
app.use(express.static('public'))

const blog1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl mi, sodales quis bibendum eget, ornare nec nibh. In in efficitur ex. Donec lacinia malesuada urna sed mollis. Sed sed dictum massa. Nullam turpis ex, posuere et eleifend sed, eleifend a nulla. Donec interdum ligula augue, sit amet venenatis dui pulvinar ac. Sed a elementum ipsum. Aliquam vestibulum sem id viverra malesuada. Suspendisse ullamcorper fringilla metus porta laoreet. Integer euismod, leo et tempor ultricies, tellus magna semper elit, nec scelerisque odio ex eu diam. Ut dictum consequat magna, et vestibulum libero dictum vel. Nullam fringilla elit sed diam eleifend, eu dignissim augue pretium. Quisque varius rutrum metus, ac finibus lacus porta ut. Nam commodo ornare venenatis. Sed sed commodo nisl."
const blog2 = "Curabitur commodo nibh quis leo finibus mollis. Integer nec risus vel sapien viverra feugiat ac vel ligula. Donec vel lorem nisl. Phasellus facilisis nisl id eros blandit, ac interdum sem posuere. Phasellus quis ipsum nec quam faucibus feugiat. Donec urna mi, rutrum eu nunc quis, fermentum mollis justo. Morbi ac risus eget arcu malesuada pretium. Sed lobortis feugiat sagittis. Nullam nec consequat massa, eu ultricies magna. Mauris pretium efficitur lacus, ut ultrices massa gravida non. In hac habitasse platea dictumst. Vivamus non condimentum magna. Aliquam fermentum pulvinar erat, eget vestibulum dolor pretium eget."
const blog3 = "Integer pulvinar non nibh vitae gravida. Vestibulum quis suscipit est. Proin venenatis convallis condimentum. Morbi pretium venenatis arcu, a elementum eros interdum eget. Duis id gravida est. Suspendisse potenti. Curabitur tempus condimentum velit, eleifend luctus erat. Suspendisse pellentesque sem et leo fermentum, in egestas ante vestibulum."

app.get("/", function(req, res) {
  res.render("index");
});

app.get('/articles/article-1', function(req, res) {
  res.render('post', {content: blog1});
});

app.get('/articles/article-2', function(req, res) {
  res.render('post', {content: blog2});
});

app.get('/articles/article-3', function(req, res) {
  res.render('post', {content: blog3});
});

app.listen(3000, function() {
  console.log("Server is running on port "+port);
});

