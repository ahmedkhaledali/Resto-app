const mongosse = require("mongoose");
const Schema = mongosse.Schema;
const adminShema = new Schema({
 nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email : { type: String, required: true },
    motpass: { type: String, required: true },
    image :{type: String, required: true }

});

module.exports = admin = mongosse.model("admin", adminShema);
