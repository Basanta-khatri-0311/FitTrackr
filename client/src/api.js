import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5500/api", // your backend port
});

// ===== USER APIs =====
export const registerUser = (userData) => API.post("/users/register", userData);
export const loginUser = (userData) => API.post("/users/login", userData);

// ===== WORKOUT APIs =====

// Fetch all workouts (you can later modify it to use userId or token)
export const getWorkouts = (userId) => API.get(`/workouts/${userId}`);

// Log (Add) a new workout
export const logWorkout = (workoutData) => API.post("/workouts", workoutData);
