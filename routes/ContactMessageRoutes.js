const express = require("express");
const router = express.Router();
const ContactMessageValidator = require("./validators/ContactMessage.validator");
const ContactMessageController = require("../controllers/ContactMessageController");
const HandleBadRequest = require("../middlewares/HandleBadRequestMiddleware");

router
  .route("/")
  .post(
    ContactMessageValidator.addMessageValidator,
    HandleBadRequest,
    ContactMessageController.add
  );

module.exports = router;
