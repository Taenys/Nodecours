let express = require("express");
let app = express();
let twig = require("twig");
let bodyParser = require("body-parser");

require("./app/route.js")(app);

app.listen(8888);