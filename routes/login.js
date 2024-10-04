const jwt = require('jsonwebtoken');
const express = require("express");
const authControllers = require("../controllers/login");
const router = express.Router();

router.post("/", authControllers);

module.exports = router;