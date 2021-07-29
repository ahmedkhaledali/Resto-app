const expres = require("express");
const router = expres.Router();
const commande = require("../Controlleur/commandeContolleur");
// const getcommande = require("../Controlleur/commandeContolleur");
// const modifcommande = require("../Controlleur/commandeContolleur");
// const suppcommande = require("../Controlleur/commandeContolleur");
router.post("/addcommande",commande.postcommande)
router.get("/getcommande",commande.getcommande)
router.put("/:id/update",commande.putcommande)
router.delete("/:id/delete",commande.suppcommande)
module.exports = router;
