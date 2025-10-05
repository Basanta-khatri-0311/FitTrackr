import express from "express";
import { createWorkout, getWorkouts } from "../controllers/workoutController.js";

const router = express.Router();

// Create a new workout
router.post("/", createWorkout);

// Get all workouts for a user
router.get("/:userId", getWorkouts);

export default router;
