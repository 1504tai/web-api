const db = require("mongoose");
var crypto = require('crypto');
db.connect("mongodb://localhost:27017/Data_product", { useNewUrlParser: true, useUnifiedTopology: true });
const acount = db.Schema({
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    name: String,
    createAt: {
        type: Date,
        default: new Date()
    }
});

const Acount = db.model('Acount', acount)
module.exports = Acount