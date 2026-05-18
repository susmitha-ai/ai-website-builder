"use client";

import { useState } from "react";

export default function ChatPanel() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="h-full p-6 border-r bg-white flex flex-col">
      <h1 className="text-2xl font-bold mb-4">AI Website Builder</h1>

      <div className="flex-1">
        <p className="text-gray-600 mb-2">
          Describe the website you want:
        </p>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Build a Tesla-style EV website for India..."
          className="w-full h-40 border rounded-lg p-3 focus:outline-none"
        />
      </div>

      <button className="mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800">
        Generate Website
      </button>
    </div>
  );
}