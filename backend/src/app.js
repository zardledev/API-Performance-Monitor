const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const healthRoutes = require("./modules/health/health.routes");
const endpointRoutes = require("./modules/endpoints/endpoint.routes");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const testRoutes = require("./modules/tests/test.routes");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoutes);
app.use("/api/endpoints", endpointRoutes);
app.use("/api/endpoints", testRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;   