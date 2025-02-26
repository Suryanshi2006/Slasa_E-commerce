import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password, "Remember Me:", rememberMe);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#3087d1]">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-extrabold text-center text-[#3087d1] mb-8">Sign In</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#3087d1]" 
              placeholder="Enter your email" 
              required 
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#3087d1]" 
              placeholder="Enter your password" 
              required 
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2" 
              /> Remember me
            </label>
            <a href="#" className="text-sm text-[#3087d1] hover:underline">Forgot Password?</a>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-[#3087d1] text-white py-3 rounded-xl hover:bg-[#4c6ef5] transition-all duration-300 transform active:scale-95"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account? <a href="#" className="text-[#3087d1] hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
