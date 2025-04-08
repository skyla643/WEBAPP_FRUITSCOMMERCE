import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* 🍋 Lemon video on the left */}
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

      {/* 🔐 Login form on the right */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-sm w-full space-y-6 p-8">
          
          {/* 🍋 Welcome message */}
          <h2 className="text-lg font-medium text-orange-500">🍋 Hello, welcome to Citrus Argentina</h2>
          <h1 className="text-3xl font-bold text-gray-900">Get Started...</h1>

          {/* Login Form */}
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
                placeholder="Enter your password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* 🍊 Fancy citrus Sign In button */}
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-gradient-to-r from-orange-400 to-yellow-300 text-white font-semibold shadow-md hover:scale-105 hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 ease-in-out"
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-sm text-gray-500">
            Don’t have an account yet? <span className="text-green-600 cursor-pointer">Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;