const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is root!"));

router.get("/party", controllers.getAllPartys);
router.post("/party", controllers.postNewParty);
router.put("/party", controllers.updateParty);
router.delete("/party", controllers.deleteParty);

router.get("/proshop", controllers.getAllShops);
router.post("/proshop", controllers.postNewShop);
router.put("/proshop", controllers.updateShop);
router.delete("/proshop", controllers.deleteShop);
module.exports = router;
