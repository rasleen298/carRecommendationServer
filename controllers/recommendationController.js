const cars = require("../data/carsDataset.json");
const calculateRecommendations = require("../services/recommendationEngine");

const getRecommendations = (req, res) => {
    //req is answers object from react
  try {
    const preferences = req.body;

    const recommendations = calculateRecommendations(
      cars,
      preferences
    );

    res.status(200).json(recommendations);
  } catch(error){
  console.error(
    "Recommendation Error:",
    error
  );

  res.status(500).json({
    message:"Failed to calculate recommendations",
    error:error.message
  });
}
};

module.exports = {
  getRecommendations,
};