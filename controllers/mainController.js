let Models = require("../Models");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send("hello, world");
        // let item = Models.Item.build({
        //     name: "pepsi",
        //     price: 200,
        // })
        User
        .findOrCreate({where: {price: 200}})
        .then(([item, created]) => {
            console.log(item.get({
            plain: true
            }))
            console.log(created);

            });
    });
}