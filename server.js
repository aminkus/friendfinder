var express = require("express");
var app = express();
var path = require("path");
//structure to support Heroku dynamic port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log(`listening on ${PORT}`)
});