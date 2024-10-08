const express = require("express");
const router = express.Router();
const usersController = require('../controllers/users')
router.get("/:id?", usersController.get);
router.post("/", usersController.post);

module.exports = router;