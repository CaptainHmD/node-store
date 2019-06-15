let Sequelize = require("sequelize");

let sequelize = new Sequelize("postgres://xhvmjrhctpibqq:fe752ce7744e3e814138556fc659951565b75fcf69f34f36c23c8417316f45f9@ec2-54-163-230-199.compute-1.amazonaws.com:5432/d6h63qshit6td6");


module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send("hello, world");
    });
}