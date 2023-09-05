const AsyncHandler = require("express-async-handler");
const express = require("express");
const router = express.Router();
const ApiResponse = require("../controllers/response/ApiResponse");
const { StatusCodes } = require("http-status-codes");

/*==============================
Development guide:-
  - Create separate .js file for each endpoints and import these files here (e.g. AdminRoutes.js)
  - Wrap the controller with AsyncHandler, it will deal with try {} catch(e) {} wrapping of async program.

==============================*/

// importing all routes
const ContactMessageRoutes = require("./ContactMessageRoutes");
const IssuerRequestRoutes = require("./IssuerRequestRoutes");

router.use(
  "/",
  AsyncHandler(async (req, res) => res.json(ApiResponse("Success!")))
);

// assign prefix - to routes
router.use("message", ContactMessageRoutes);
router.use("issuer", IssuerRequestRoutes);

module.exports = router;
