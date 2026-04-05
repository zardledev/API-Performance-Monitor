const express = require("express");
const controller = require("./test.controller");

const router = express.Router();

router.post("/:id/test", controller.runTest);

module.exports = router;