const express = require("express");
const controller = require("./endpoint.controller");

const router = express.Router();

router.post("/", controller.createEndpoint);
router.get("/", controller.getAllEndpoints);
router.get("/:id", controller.getEndpointById);
router.put("/:id", controller.updateEndpoint);
router.delete("/:id", controller.deleteEndpoint);

module.exports = router;