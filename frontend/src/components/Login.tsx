import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

// Create wrapper components for the icons to force proper typing
const IconGoogle: React.FC<React.SVGProps<SVGSVGElement>> = FcGoogle as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const IconLinkedin: React.FC<React.SVGProps<SVGSVGElement>> = FaLinkedin as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const IconTwitter: React.FC<React.SVGProps<SVGSVGElement>> = FaTwitter as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const Login: React.FC = () => {
  return (
    <div className="flex h-screen font-sans">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10" />
      </div>

      {/* 🔐 Login form on the right */}
      <div className="w-1/2 bg-white flex items-center justify-center relative z-20">
        <div className="max-w-sm w-full space-y-6 p-8 rounded-xl shadow-2xl bg-white/80 backdrop-blur-md transition-all">
          <h2 className="text-lg font-medium text-orange-500 flex items-center gap-1">
            <span className="animate-pulse">🍋</span>
            Hello, welcome to Citrus Argentina
          </h2>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Get Started...</h1>
            <div className="h-[2px] w-1/2 bg-gradient-to-r from-orange-300 to-yellow-400 rounded-full mt-1" />
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-400 to-yellow-300 text-white font-semibold shadow-md transform hover:scale-105 hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
            >
              Sign In
            </button>
          </form>
          <div className="text-center">
            <p className="text-gray-500 text-sm">or continue with</p>
            <div className="flex justify-center gap-4 mt-2">
              <button className="p-3 bg-white rounded-full shadow hover:scale-105 hover:shadow-lg transition text-xl">
                <IconGoogle />
              </button>
              <button className="p-3 bg-white rounded-full shadow hover:scale-105 hover:shadow-lg transition text-blue-700 text-xl">
                <IconLinkedin />
              </button>
              <button className="p-3 bg-white rounded-full shadow hover:scale-105 hover:shadow-lg transition text-sky-500 text-xl">
                <IconTwitter />
              </button>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">
            Don’t have an account yet?{" "}
            <Link to="/signup" className="text-green-600 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;