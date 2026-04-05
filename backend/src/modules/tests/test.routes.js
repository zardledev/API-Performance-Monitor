const express = require("express");
const controller = require("./test.controller");

const router = express.Router();

router.get("/:id/stats", controller.getStats);
router.post("/:id/test", controller.runTest);
router.get("/:id/stats", controller.getStats);

module.exports = router;
