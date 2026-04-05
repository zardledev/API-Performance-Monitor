const express = require("express");
const controller = require("./endpoint.controller");
const validate = require("../../middlewares/validate");
const {
  createEndpointSchema,
  updateEndpointSchema,
} = require("./endpoint.validation");

const router = express.Router();

router.post("/", validate(createEndpointSchema), controller.createEndpoint);
router.get("/", controller.getAllEndpoints);
router.get("/:id", controller.getEndpointById);
router.put("/:id", validate(updateEndpointSchema), controller.updateEndpoint);
router.delete("/:id", controller.deleteEndpoint);

module.exports = router;