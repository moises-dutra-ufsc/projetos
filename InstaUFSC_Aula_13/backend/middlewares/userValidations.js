const { body } = require("express-validator");

// esta função retorna erros baseados no body
// retorna uma lista de erros para o frontend
const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("email")
      .isString()
      .withMessage("O email é obrigatório.")
      .isEmail()
      .withMessage("Insira um e-mail válido"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória.")
      .isLength({ min: 6 })
      .withMessage("A senha precisa ter no mínimo 6 caracteres."),
    body("confirmPassword")
      .isString()
      .withMessage("A comparação da senha é obrigatória.")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          //quando se usa validação customizada, a mensagem de erro deve ser escrita desta forma
          throw new Error("As senhas não são iguais");
        }
        return true; // aqui, tudo deu certo
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O email é obrigatório.")
      .isEmail()
      .withMessage("Insira um e-mail válido"),
    body("password").isString().withMessage("A senha é obrigatória."),
  ];
};

const userUpdateValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("password")
      .optional()
      .isLength({ min: 6 })
      .withMessage("A senha precisa ter no mínimo 6 caracteres."),
  ];
};

//exportação como objeto
module.exports = {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
};
