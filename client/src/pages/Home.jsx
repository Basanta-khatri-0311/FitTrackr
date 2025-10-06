import heroImage from "../assets/home.avif";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div> {/* overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Track Your <span className="text-green-500">Gains</span>, Transform Your <span className="text-orange-500">Body</span>
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Your personal fitness tracker to monitor workouts, progress, and results.  
            Built for those who lift, sweat, and evolve.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 md:px-16 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-12">Why FitTrackr?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Workout Tracking",
              desc: "Log exercises, sets, reps, and weights to monitor your progress.",
            },
            {
              title: "Progress Analytics",
              desc: "Visualize your gains and improvements over time with charts.",
            },
            {
              title: "Personalized Plans",
              desc: "Get tailored workout plans based on your goals and schedule.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-700 rounded-xl p-8 hover:scale-105 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-400">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
