 
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    
    setFormData({...formData, [e.target.id]: e.target.value });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(false); 
            const res = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data); 
            setLoading(false);
            if (data.success === false) {
                setError(true); 
                return
            }          
            navigate('/login')
        } catch (error) {
        setLoading(false);
        setError(true);
         console.log(error)
        }
    };

    const handleGoogleLogin = (e) => {
      // Implement Google OAuth login here
      e.preventDefault();
      alert('Google OAuth login successful. You can now proceed to register.');
    };
    const forgotPassword = (e) => {
      // Implement password reset functionality here
      e.preventDefault();
      alert('Password reset link has been sent to your email.');
    }
  
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Register</h2>
  
          <form onSubmit={handleSubmit}>
              {/* name */}
              <div className="mb-4">
                  <label className="block text-gray-600 mb-2" htmlFor="username">
                  Name
                  </label>
                  <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  />
              </div>
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
                  disabled={loading}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
                  >
                  { loading ? "Loading..." :  "Sign Up"}
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
            Already have an account? {" "}
            <Link to="/login"
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Sign In
            </Link>
          </p>
          <p className='text-red-600 pt-5 text-center'>{error && "Something went wrong!"}</p>
        </div>
      </div>
    )  
};

export default Register;
