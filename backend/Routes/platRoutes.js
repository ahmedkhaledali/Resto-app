const expres = require("express");
const router = expres.Router();
const plat = require("../Controlleur/platControlleur");
// const getplat = require("../Controlleur/platControlleur");
// const modifplat = require("../Controlleur/platControlleur");
// const suppplat = require("../Controlleur/platControlleur");
router.post("/addplat",plat.postplat)
router.get("/getplat",plat.getplat)
router.put("/:id/update",plat.putplat)
router.delete("/:id/delete",plat.suppplat)
module.exports = router;
