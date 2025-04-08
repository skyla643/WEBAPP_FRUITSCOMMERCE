import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    // handle result
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f8f8] to-[#d4d4d4] font-sans">
      <div className="flex w-[900px] bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Left Side (image or abstract design) */}
        <div className="w-1/2 bg-[#007aff] flex items-center justify-center p-8">
          <img
            src="/your-login-image.png" // replace with local asset or URL
            alt="Login Visual"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        {/* Right Side (login form) */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 tracking-tight">
            Get Started...
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Sign In
            </button>
          </form>

          {/* Third-party login options */}
          <p className="mt-6 text-center text-sm text-gray-500">or Continue with</p>
          <div className="flex justify-center mt-4 gap-4">
            <button className="p-2 border rounded-full hover:bg-gray-200 transition">
              <img src="/google.svg" alt="Google" className="h-5 w-5" />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-200 transition">
              <img src="/facebook.svg" alt="Meta" className="h-5 w-5" />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-200 transition">
              <img src="/twitter.svg" alt="Twitter" className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-6 text-xs text-gray-500 text-center">
            Don’t have an account yet? <span className="text-emerald-600 font-medium cursor-pointer">Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;