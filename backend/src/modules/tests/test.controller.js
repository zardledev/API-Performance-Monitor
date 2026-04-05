const service = require("./test.service");

async function runTest(req, res, next) {
  try {
    const result = await service.runTest(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
async function getStats(req, res, next) {
  try {
    const stats = await service.getStats(req.params.id);
    res.status(200).json(stats);
  } catch (error) {
    next(error);
  }
}
module.exports = {
  runTest,
  getStats,
};