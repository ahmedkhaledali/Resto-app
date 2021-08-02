const expres = require("express");
const router = expres.Router();
const user = require("../Controlleur/userControlleur");
// const getuser = require("../Controlleur/userControlleur");
// const modifuser = require("../Controlleur/userControlleur");
// const suppuser = require("../Controlleur/userControlleur");
router.post("/adduser",user.postuser)
router.get("/getuser",user.getuser)
router.put("/:id",user.putuser)
router.delete("/:id",user.suppuser)
module.exports = router;
