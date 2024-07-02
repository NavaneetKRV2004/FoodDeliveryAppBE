const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect("mongodb+srv://basiltomy414:66257764@cluster0.xnlzppq.mongodb.net/food-delivery?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("Failed to connect to MongoDB");
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server started");
});

app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
