import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/users/login', formData)
    const data = res.json()
    console.log(data)
    
  };

  const handleGoogleLogin = () => {
    // Implement Google OAuth login here
   
  };
  const forgotPassword = (e) => {
    // Implement password reset functionality here
    e.preventDefault();
    alert('Password reset link has been sent to your email.');
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4"> Login</h2>

        <form onSubmit={handleSubmit}>
            {/* email */}
            <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
            </label>
            <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                onChange={handleChange}
            />
            </div>
            {/* password */}
            <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    onChange={handleChange}
                />
            </div>
            {/* forgot-password */}
            <div className="mb-4 text-right">
                    <button
                    className="text-blue-500 hover:underline focus:outline-none"
                    onClick={forgotPassword}
                    >
                    Forgot Password?
                    </button>
            </div>
            {/* submit-button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
                >
                Login
            </button>
        </form>

        <div className="flex items-center justify-center my-4">
          <span className="border-t border-gray-300 flex-grow"></span>
          <span className="mx-4 text-gray-500">OR</span>
          <span className="border-t border-gray-300 flex-grow"></span>
        </div>

        <button
          className="w-full flex items-center justify-center bg-gray-100 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-200 border-2 border-gray-500"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="text-xl mr-2" /> Continue with Google
        </button>

        <p className="text-center text-gray-600 mt-4">
          Don&apos;t have an account? {" "}
          <Link to="/register"
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
