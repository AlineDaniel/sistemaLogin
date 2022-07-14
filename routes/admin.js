var express = require('express');
var router = express.Router();
var AdminController = require("../controllers/AdminController");
var AutenticacaoAdmin = require("../middlewares/AutenticacaoAdmin");

router.get("/login", AdminController.login);
router.post("/login", AdminController.acaoLogin);
router.get("/logout", AutenticacaoAdmin, AdminController.logout);

router.get("/", AutenticacaoAdmin, AdminController.index);

module.exports = router;
