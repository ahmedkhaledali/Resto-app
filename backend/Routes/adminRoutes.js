const expres = require("express");
const router = expres.Router();
const admin = require("../Controlleur/adminControlleur");
// const getadmin = require("../Controlleur/adminControlleur");
// const modifadmin = require("../Controlleur/adminControlleur");
// const suppadmin = require("../Controlleur/adminControlleur");
router.post("/addadmin",admin.postadmin)
router.get("/getadmin",admin.getadmin)
router.put("/:id/update",admin.putadmin)
router.delete("/:id/delete",admin.suppadmin)
module.exports = router;
