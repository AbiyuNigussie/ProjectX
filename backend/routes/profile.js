const router = require("express").Router();
const profileController = require("../controllers/profileController");
const verifyToken = require("../verifyToken");

router.get("/profile/", verifyToken, profileController.profile);

module.exports = router;
