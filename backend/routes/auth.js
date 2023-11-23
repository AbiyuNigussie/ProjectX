const router = require("express").Router();

const authController = require("../controllers/authController");

router.post("/signup", authController.signup);

router.get("/verify", authController.verify);

router.post("/login", authController.signin);

module.exports = router;
