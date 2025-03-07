import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Get current route

  // ✅ Define `isAuthPage` to check if the current page is an authentication page
  const isAuthPage = ["/signin", "/signup"].includes(location.pathname);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://your-api.com/api/signin", {
        email,
        password,
      });

      const { token } = response.data; // Extract JWT token

      // ✅ Store token in localStorage
      localStorage.setItem("authToken", token);

      alert("Login successful! Redirecting...");
      navigate("/dashboard"); // Redirect to dashboard
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Invalid credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`main-content ${isAuthPage ? "auth-page" : ""}`}>
 <div className="flex h-screen w-full items-center justify-center  px-4">
  <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg">
    <h2 className="text-3xl font-extrabold text-center text-[#3087d1] mb-8">Sign In</h2>

    <form onSubmit={handleSubmit}>
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

      <button 
        type="submit" 
        className="w-full !bg-[#3087d1] text-white py-3 rounded-xl hover:bg-[#4c6ef5] transition-all duration-300 transform active:scale-95"
        disabled={loading}
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  </div>
</div>


    </div>
  );
};

export default SignIn;
