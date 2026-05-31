const express = require("express");

const router = express.Router();

const {
  getRecommendations,
} = require("../controllers/recommendationController");

router.post("/", getRecommendations);
router.get("/", (req, res) => {
  res.send("Recommendations route works");
});
module.exports = router;