import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await registerUser(form);
      toast.success("Registration successful 🎉", { duration: 2000 });
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
        <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-400 tracking-wide">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 transition"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 transition"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition flex justify-center items-center ${loading
                ? "bg-green-600 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
                }`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Register"
              )}
            </button>
          </form>

          <p className="text-center mt-5 text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-orange-500 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#1f2937",
            color: "#fff",
            width: "300px", // 
            textAlign: "center",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#1f2937",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#1f2937",
            },
          },
        }}
      />
    </>
  );
};

export default Register;
