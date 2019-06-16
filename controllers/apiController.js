let Models = require("../Models");


module.exports = (app) => {

    app.get("/items/api", (req, res) => {
        let object = Models.Item.findAll().then((objects) => {
            res.send(objects);
        })
    })

}