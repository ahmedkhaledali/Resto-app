const mongosse = require("mongoose");
const Schema = mongosse.Schema;
const platShema = new Schema({
    entres: { type: String, required: true },
    platsprincipaux: { type: String, required: true },
    desserts : { type: String, required: true },
    sauces: { type: String, required: true }
});

module.exports = plats = mongosse.model("plats", platShema);
