import React from 'react';

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">Signup</h2>
      <form className="flex flex-col gap-4 w-80">
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          required
          className="p-3 border border-gray-500 rounded bg-transparent focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 border border-gray-500 rounded bg-transparent focus:outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="p-3 border border-gray-500 rounded bg-transparent focus:outline-none"
        />
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
          className="p-3 border border-gray-500 rounded bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
