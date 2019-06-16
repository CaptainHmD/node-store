// sequelize guide: http://docs.sequelizejs.com/

let express = require("express");
let mainController = require("./controllers/mainController");


let app = express();


mainController(app);


app.listen(process.env.PORT);




