const mongosse = require("mongoose");
const Schema = mongosse.Schema;
const commandeShema = new Schema({
 plat: { type: String, required: true },
    quantiter: { type: String, required: true },
    prix : { type: String, required: true },
    etat: { type: String, required: true }
});

module.exports = commandes = mongosse.model("commandes", commandeShema);
