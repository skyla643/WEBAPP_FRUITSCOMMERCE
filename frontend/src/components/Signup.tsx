import React from 'react';
import { Link } from 'react-router-dom'; // <-- Make sure this is here!

const Signup: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Lemon video on the left (optional if you added it) */}
      <div className="w-1/2 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/lemonlogginvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Sign Up form on the right */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-sm w-full space-y-6 p-8">
          <h2 className="text-lg font-medium text-orange-500">🍊 Ready to join Citrus Argentina?</h2>
          <h1 className="text-3xl font-bold text-gray-900">Create Your Account</h1>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-md bg-gradient-to-r from-green-400 to-lime-300 text-white font-semibold shadow-md hover:scale-105 hover:from-green-500 hover:to-lime-400 transition-all duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center text-sm text-gray-500">
            Already have an account? <Link to="/" className="text-orange-600 hover:underline">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;