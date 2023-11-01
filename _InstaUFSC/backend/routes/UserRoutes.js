const express = require("express");
const router = express.Router();

//controller
const { register } = require("../controllers/UserController");
const validate = require("../middlewares/handleValidation");
const { userCreateValidation } = require("../middlewares/userValidations");

//rotas
//será uma rota de post, define-se o caminho e associa-sea função equivalente
router.post("/register", userCreateValidation(), validate, register);

module.exports = router;
