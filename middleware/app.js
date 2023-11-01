const express = require("express");
const app = express();

const loggingMiddleware = (req, res, next) => {
  console.log("Eu estou dentro do middleware.");
  console.log(`${new Date().toISOString()}, URL acessada: ${req.originalUrl}`);
  next();
};

const sigIn = (req, res, next) => {
  //  console.log("Middleware: autorização de acesso ao usuário.");
  if (req.query.ad === "true") {
    req.admin = true;
    next();
  } else {
    res.send(
      "Autorização negada: Só administradores do sistema podem se logar."
    );
  }
};

const checkProductFormat = (req, res, next) => {
  let strSlice = req.query.p.substring(req.query.p.indexOf("_") + 1);
  if (isNaN(strSlice)) {
    res.send("O produto está incorretamente formatado.");
  } else {
    let fileNumber = parseInt(strSlice);
    req.fileNumber = fileNumber;
    console.log(fileNumber);
    next();
  }
};

const checkIfProductExists = (req, res, next) => {};

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", sigIn, (req, res) => {
  console.log(req.admin);
  res.send("Users Page");
});

app.get("/products", checkProductFormat, (req, res) => {
  res.send("Products");
});

app.listen(3000, () => {
  console.log("Servidor inicializado.");
});
