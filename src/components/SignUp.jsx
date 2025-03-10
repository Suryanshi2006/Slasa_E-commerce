import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    // ✅ Form Validations
    if (!email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!agreeTerms) {
      setError("You must agree to the terms and conditions!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://your-api.com/api/signup", {
        email,
        password,
      });

      const { token } = response.data; // Extract JWT token from response

      // ✅ Save token in localStorage
      localStorage.setItem("authToken", token);

      alert("Signup successful! Redirecting...");
      navigate("/dashboard"); // Redirect to dashboard
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Signup failed! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-96 transform transition-all hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-[#3087d1] mb-8">Sign Up</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Confirm Password Input */}
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

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center mb-6 p-8">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
              />{" "}
              I agree to the <Link to="/terms" className="text-[#4c6ef5] hover:underline">terms and conditions</Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full !bg-[#3087d1] text-white py-3 rounded-xl hover:bg-[#4c6ef5] transition-all duration-300 transform active:scale-95"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Redirect to Sign In */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-[#4c6ef5] hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
