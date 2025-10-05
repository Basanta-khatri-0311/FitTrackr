import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5500/api",
});

export const registerUser = (userData) => API.post("/users/register", userData);
export const loginUser = (userData) => API.post("/users/login", userData);
export const addWorkout = (workoutData) => API.post("/workouts", workoutData);
export const getWorkouts = (userId) => API.get(`/workouts/${userId}`);
