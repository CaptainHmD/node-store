let express = require("express");
let ejs = require("ejs");
let mainController = require("./controllers/mainController");
let apiController = require("./controllers/apiController");

let app = express();

app.set("view engine", "ejs");
app.use(express.static("./public")); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mainController(app);
apiController(app);


if (process.env.ONLINE){
    app.listen(process.env.PORT);
}else{
    app.listen(5000);
}







