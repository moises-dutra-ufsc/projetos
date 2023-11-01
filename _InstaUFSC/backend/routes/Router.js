const express = require("express");
const router = express();

//definição do prefixo de api para as rotas de usuário
router.use("/api/users", require("./UserRoutes"));

//home
router.get("/", (req, res) => {
  res.send("API funcionando.");
});

module.exports = router;
