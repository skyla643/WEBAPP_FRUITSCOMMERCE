// src/components/Login.tsx
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-hero-gradient">
      <div className="bg-white rounded-lg shadow-custom-heavy p-8 max-w-md w-full">
        <h1 className="text-3xl font-heading text-darkBlue mb-6 text-center">
          Welcome to Citrus Argentina
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-darkBlue mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-lightGray rounded p-2 focus:outline-none focus:ring-2 focus:ring-brandYellow"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-darkBlue mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-lightGray rounded p-2 focus:outline-none focus:ring-2 focus:ring-brandYellow"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-earthGreen hover:bg-accentOrange transition-colors duration-300 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;