import { useState } from "react";
import { getWorkouts, logWorkout } from "../api"; // API call to post workout

const WorkoutForm = ({ onSuccess, onClose }) => {
  const [form, setForm] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logWorkout(form);
      onSuccess();
      onClose();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to log workout");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Log Workout</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="exercise"
          placeholder="Exercise"
          value={form.exercise}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="number"
          name="sets"
          placeholder="Sets"
          value={form.sets}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="number"
          name="reps"
          placeholder="Reps"
          value={form.reps}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={form.weight}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition"
        >
          Log Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
