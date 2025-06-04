import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login: accept any non-empty email/password
    if (email && password) {
      // In real app, call API and get token
      localStorage.setItem("token", "dummy-token");
      window.location.href = "/";
    } else {
      setError("Please enter email and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-200 to-white">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-xl shadow-xl border p-8 w-full max-w-sm space-y-6"
      >
        <h1 className="text-2xl font-bold text-green-700 mb-2 text-center">Login</h1>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <div>
          <label className="block mb-1 text-green-700 font-semibold">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-green-700 font-semibold">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}