const recommendationRoutes =
  require("./routes/recommendationRoutes");

app.use(express.json());

app.use(
  "/api/recommendations",
  recommendationRoutes
);