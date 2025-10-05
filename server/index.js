import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/users", userRoutes);
app.use("/api/workouts", workoutRoutes);

const PORT = process.env.PORT || 5500;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("FitTrackr backend is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
