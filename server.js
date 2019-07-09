var express = require("express");
var app = express();
//structure to support Heroku dynamic port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log(`listening on ${PORT}`)
});