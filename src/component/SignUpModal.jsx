import React from "react";

function SignUpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs bg-opacity-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <form className="space-y-4 " variant="standard">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-sky-500 text-white w-full py-2 rounded hover:bg-blue-800"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between">
          <button
            className="mt-4  text-sm text-gray-500 underline"
            onClick={onClose}
          >
            Close
          </button>
          <button className="mt-4 text-sm text-blue-500 underline">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
