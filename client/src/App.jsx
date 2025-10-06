import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const isLoggedIn = !!localStorage.getItem("token"); 

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
