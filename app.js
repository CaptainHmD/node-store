let express = require("express");
let mainController = require("./controllers/mainController");


let app = express();


mainController(app);

if (process.env.PORT){
    app.listen(process.env.PORT);
}else{
    app.listen(3000);
}





