const express = require("express");
const cors = require("cors");
const cars = require("./data/carsDataset.json");

const recommendationRoutes = require("./routes/recommendationRoutes");

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());
app.use("/api/recommendations", recommendationRoutes);

app.get("/api/cars", (req, res) => {
  res.json(
    cars
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
