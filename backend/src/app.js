const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const healthRoutes = require("./modules/health/health.routes");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;