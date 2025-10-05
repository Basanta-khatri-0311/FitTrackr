import { useEffect } from "react";
import { getWorkouts } from "./api";

function App() {
  useEffect(() => {
    const fetchWorkouts = async () => {
      const userId = "YOUR_USER_ID_HERE";
      const { data } = await getWorkouts(userId);
      console.log(data);
    };
    fetchWorkouts();
  }, []);

  return <div>Check console for workouts</div>;
}

export default App;
