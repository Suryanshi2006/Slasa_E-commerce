import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle sign-up logic here, like making an API call
    console.log("Signing up with", email, password, agreeTerms);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#3087d1]">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-96 transform transition-all hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-[#4c6ef5] mb-8">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#4c6ef5] transition-all" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#4c6ef5] transition-all" 
              placeholder="Enter your password" 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
            <input 
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#4c6ef5] transition-all" 
              placeholder="Confirm your password" 
              required 
            />
          </div>
          <div className="flex items-center mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input 
                type="checkbox" 
                className="mr-2" 
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)} 
              /> I agree to the terms and conditions
            </label>
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#3087d1] text-black py-3 rounded-xl hover:bg-[#4c6ef5] transition-all duration-300 transform active:scale-95">
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account? <a href="#" className="text-[#4c6ef5] hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
