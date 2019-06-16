// sequelize guide: http://docs.sequelizejs.com/

let Sequelize = require("sequelize");

if (process.env.ONLINE){
    // connect to remote datbase
    let sequelize = new Sequelize(process.env.DATABASE_URL);
}else{
    // connect to local database
    console.error("local database connection needed");
    let sequelize = new Sequelize("postgres://xhvmjrhctpibqq:fe752ce7744e3e814138556fc659951565b75fcf69f34f36c23c8417316f45f9@ec2-54-163-230-199.compute-1.amazonaws.com:5432/d6h63qshit6td6")

}


// set store item model

class Item extends Sequelize.Model {}
Item.init({
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: { 
        type: Sequelize.STRING, 
        allowNull: false, 
        get(){
          // getter
          let name = this.getDataValue("name");
          // 'this' allows you to access attributes of the instance
          return `${name} => store item`;
        }, 
        validate: {
            len: [3, 40], 
            customValidator(value){
                if (name.length > 100){
                    throw new Error("names must be under 100 letters");
                }
            }
        }},
    price: { type: Sequelize.INTEGER, allowNull: false, validate: {isNumeric: true, min: 0, max: 10000} },
    creation_date: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    image_file: { type: Sequelize.STRING, defaultValue: "item.png"},

    // Timestamps are needed to use Sequelize migration
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW}
}, { sequelize, modelName: "item"});

/* this model showcases */
// basic Sequelize model structure
// how to set attributes like allowNull
// how set validators with validate both custom validators and pre defined validators
// how to make a getter for a field (setters are same)
// data needed for migration

module.exports.Item = Item;