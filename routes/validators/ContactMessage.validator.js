const { body } = require("express-validator");

const addMessageValidator = [
  body("name")
    .notEmpty()
    .withMessage("name is required.")
    .isString()
    .withMessage("name must be type String.")
    .isLength({ max: 50 })
    .withMessage("name cannot contain more than 50 characters."),
  body("email")
    .notEmpty()
    .withMessage("email parameter is required.")
    .isString()
    .withMessage("email must be type String.")
    .isEmail()
    .withMessage("email is in invalid format."),
  body("body")
    .notEmpty()
    .withMessage("body is required.")
    .isLength({ min: 0, max: 300 })
    .withMessage("message body can only contain 300 characters."),
];

module.exports = { addMessageValidator };
