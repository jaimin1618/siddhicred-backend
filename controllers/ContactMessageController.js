const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const AsyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

const Message = require("../models/Message");
const ApiError = require("./error/ApiError");
const ApiResponse = require("./response/ApiResponse");

const add = AsyncHandler(async (req, res) => {
  const { name, email, body } = req.body;

  const isAdded = await Message.create({ name, email, body });

  console.log(isAdded);
  if (!isAdded)
    throw new ApiError("Internal Server Error - Adding your message failed!");

  res
    .status(StatusCodes.CREATED)
    .json(ApiResponse("Messaged received successfully!", StatusCodes.CREATED));
});

const index = AsyncHandler(async (req, res) => {});

module.exports = { add, index };
