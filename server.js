var express = require('express');  // pulling npm express package

var app = express();                // utilizing expess package

var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");          // requires the npm express handlebar package
app.use(express.static("public"));                  // express.static allows all the files in the public folder
                                                    // to be utilized


app.use(express.urlencoded({ extended: true }));      // allows the return to be interpreted
app.use(express.json());                              // as a json object


app.engine("handlebars", exphbs({ defaultLayout: "main" })); // ? app.engine defines which files to find? \/
                                                            
app.set("view engine", "handlebars");                       // utilizes the express package               /\

var routes = require("./controllers/burgers_controllers");    //require route to burgers_controlllers.js

app.use(routes);                                             //  use these routes utilizing the express package



app.listen(PORT, function() {                                   // "activates" port
  console.log("Server listening on: http://localhost:" + PORT);
});

