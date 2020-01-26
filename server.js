const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const version = require('./package.json').version;
const config = require('./config');
// const productService  = require('./project-services/apiService');


//serve up assets folder and all content as static files from server to client.
app.use(express.static(path.join(__dirname,'app')));

//use bodyParser, do not encode url.
app.use(bodyParser.urlencoded({
  extended: false
}));

//Routing paths for APIs and html docs.
var apiRoutes = require('./app/routing/apiRoutes.js');
app.use('/', apiRoutes);

var htmlRoutes = require('./app/routing/htmlRoutes.js');
app.use('/', htmlRoutes);

//Ternary operator. If process.env.port is undefined, we use 3000. In either case, log result.
app.listen(config.web.port,function(){
  process.env.PORT == undefined? console.log("App listening on Port 3000"):console.log("App listening on PORT" + process.env.PORT);
});