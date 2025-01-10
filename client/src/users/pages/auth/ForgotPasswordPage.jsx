import React, { useState } from 'react'

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
    const sendOtp = (e) => {
      e.preventDefault();
      setOtpSent(true);
      alert('OTP sent to your email!');
    };
  
    const resetPassword = (e) => {
      e.preventDefault();
      alert('Password has been reset successfully!');
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Forgot Password
          </h2>
  
          {!otpSent ? (
            <form onSubmit={sendOtp}>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Send OTP
              </button>
            </form>
          ) : (
            <form onSubmit={resetPassword}>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="otp">
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="new-password">
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
  
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Reset Password
              </button>
            </form>
          )}
        </div>
      </div>
    );
}

export default ForgotPasswordPage
