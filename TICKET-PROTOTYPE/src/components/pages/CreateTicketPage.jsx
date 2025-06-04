import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function CreateTicket() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-700 relative">
      {/* Tokopedia Helpdesk Watermark */}
      <div className="absolute top-6 left-10 z-10 flex items-center space-x-2 select-none">
        {/* You can replace this with an <img> if you have a logo */}
        <span className="text-2xl font-bold text-white drop-shadow-lg tracking-wide">
          Tokopedia Helpdesk
        </span>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white rounded-2xl shadow-2xl border border-green-200 p-10 w-full max-w-2xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-green-700">Create New Ticket</h1>
            <button
              className="text-green-700 hover:underline font-semibold"
              onClick={() => navigate("/")}
              type="button"
            >
              &larr; Back to Dashboard
            </button>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-green-700 font-semibold">Subject</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md" required />
            </div>
            <div>
              <label className="block mb-1 text-green-700 font-semibold">Description</label>
              <textarea className="w-full px-4 py-2 border rounded-md" rows={4} required />
            </div>
            <div>
              <label className="block mb-1 text-green-700 font-semibold">Priority</label>
              <select className="w-full px-4 py-2 border rounded-md">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md">
              Submit Ticket
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}