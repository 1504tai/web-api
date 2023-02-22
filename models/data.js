const db = require("mongoose");
db.connect("mongodb://localhost:27017/Data_product", { useNewUrlParser: true, useUnifiedTopology: true });
const product = db.Schema({
    img: String,
    name: String,
    description: String,
    des: String,
    price: Number,
    type: String,
    createAt: {
        type: Date,
        default: new Date()
    }
});
const Products = db.model('Product', product)
module.exports = Products