import Workout from "../models/Workout.js";

// Create a workout
export const createWorkout = async (req, res) => {
  try {
    const { user, workoutType, exercises } = req.body;
    const workout = new Workout({ user, workoutType, exercises });
    await workout.save();
    res.status(201).json({ message: "Workout saved", workout });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get workouts for a user
export const getWorkouts = async (req, res) => {
  try {
    const { userId } = req.params;
    const workouts = await Workout.find({ user: userId }).sort({ date: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
