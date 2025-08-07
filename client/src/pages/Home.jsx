// src/pages/Home.jsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 to-blue-700 text-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Weight Tracker</h1>
      <p className="text-xl md:text-2xl mb-10 max-w-xl">
        "Your health is your wealth. Track your weight daily and stay consistent!"
      </p>
      <div className="flex gap-6">
        <Link to="/signup">
          <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">Signup</button>
        </Link>
        <Link to="/login">
          <button className="bg-transparent border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
