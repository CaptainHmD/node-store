let bodyParser = require("body-parser");
let Models = require("../Models");


module.exports = (app) => {
    app.get("/", (req, res) => {
        // let item = Models.Item.build({
        //     name: "pepsi",
        //     price: 200,
        // });
        // item.save().then((createdItem) => {
        //     // console.log(createdItem.get({ plain:true })); // this logs the object the was created
        //     res.send(createdItem.toJSON());
        // }).catch((err) => {
        //     console.error(err);
        // });
        res.render("index");
    });

    app.get("/items", (req, res) => {
        let object = Models.Item.findAll().then((objects) => {
            res.render("items", {objects_array: objects});
        })
    })

}