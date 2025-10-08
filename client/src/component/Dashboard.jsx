import { useState, useEffect } from "react";
import { getWorkouts } from "../api"; // API call to get workouts
import WorkoutForm from "./WorkoutForm"; // Form to log new workout

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const userName = localStorage.getItem("userName") || "User";

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const { data } = await getWorkouts(); // get workouts from backend
      setWorkouts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-6 py-10 md:px-16 bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">
          Welcome, {userName} 💪
        </h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition"
        >
          Log New Workout
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Workouts Logged</h3>
          <p className="text-2xl font-bold">{workouts.length}</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Calories Burned</h3>
          <p className="text-2xl font-bold">0</p> {/* Update dynamically later */}
        </div>
        <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Weight</h3>
          <p className="text-2xl font-bold">-- kg</p> {/* Update dynamically later */}
        </div>
      </div>

      {/* Recent Workouts */}
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">Recent Workouts</h2>
        {workouts.length === 0 ? (
          <p className="text-gray-400">No workouts logged yet.</p>
        ) : (
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Exercise</th>
                <th className="py-2 px-4">Sets</th>
                <th className="py-2 px-4">Reps</th>
                <th className="py-2 px-4">Weight</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((w) => (
                <tr key={w._id} className="border-b border-gray-700">
                  <td className="py-2 px-4">{new Date(w.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4">{w.exercise}</td>
                  <td className="py-2 px-4">{w.sets}</td>
                  <td className="py-2 px-4">{w.reps}</td>
                  <td className="py-2 px-4">{w.weight} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Workout Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-xl w-full max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-white text-xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <WorkoutForm onSuccess={fetchWorkouts} onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};



export default Dashboard;
