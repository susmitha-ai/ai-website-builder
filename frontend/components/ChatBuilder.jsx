"use client";

import { useState } from "react";
import { API_URL } from "../utils/api";

export default function ChatBuilder() {
  const [prompt, setPrompt] = useState("");
  const [websiteData, setWebsiteData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Generate website from backend
  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a website idea first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      const data = await response.json();

      // Save response locally
      setWebsiteData(data);

      // Save for PreviewPanel
      localStorage.setItem("websiteData", JSON.stringify(data));

      // Notify PreviewPanel
      window.dispatchEvent(new Event("websiteGenerated"));
    } catch (error) {
      console.error("Generation failed:", error);
      alert("Failed to generate website. Check backend.");
    }

    setLoading(false);
  };

  // Suggested prompt buttons
  const handleSuggestion = (suggestion) => {
    setPrompt(suggestion);
  };

  return (
    <div className="h-screen p-8 bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        Build with AI Agent
      </h2>

      <p className="text-gray-500 mt-2">
        Describe your dream website and let the AI architect it.
      </p>

      {/* Suggestions */}
      <div className="mt-6 bg-gray-100 rounded-2xl p-4">
        <p className="font-medium mb-3">Suggested:</p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() =>
              handleSuggestion(
                "Build a Tesla-style EV website for India"
              )
            }
            className="px-4 py-2 bg-white rounded-full shadow hover:bg-purple-100 transition"
          >
            Tesla EV Website
          </button>

          <button
            onClick={() =>
              handleSuggestion(
                "Create a premium SaaS startup website"
              )
            }
            className="px-4 py-2 bg-white rounded-full shadow hover:bg-purple-100 transition"
          >
            SaaS Startup
          </button>

          <button
            onClick={() =>
              handleSuggestion(
                "Build a digital marketing agency website"
              )
            }
            className="px-4 py-2 bg-white rounded-full shadow hover:bg-purple-100 transition"
          >
            Marketing Agency
            
          </button>
        </div>
      </div>

      {/* Prompt Input */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Build a futuristic Tesla-style EV website..."
        className="mt-8 flex-1 border rounded-2xl p-4 text-lg focus:outline-none resize-none shadow-sm"
      />

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`mt-6 py-4 rounded-2xl text-lg font-semibold shadow-lg transition ${
          loading
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-105"
        }`}
      >
        {loading ? "Generating..." : "Generate Website"}
      </button>

      {/* Status Panel */}
      {websiteData && !websiteData.error && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-4 overflow-y-auto max-h-52">
          <h3 className="text-xl font-bold text-green-700">
            Website Generated Successfully
          </h3>

          <p className="mt-2 text-gray-700">
            <strong>Name:</strong> {websiteData.websiteName}
          </p>

          <p className="text-gray-700">
            <strong>Theme:</strong> {websiteData.theme}
          </p>

          {websiteData.pages && (
            <div className="mt-2">
              <strong>Pages:</strong>
              <ul className="list-disc pl-5 text-gray-700">
                {websiteData.pages.map((page, index) => (
                  <li key={index}>{page}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Error Panel */}
      {websiteData?.error && (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-4">
          <h3 className="text-lg font-bold text-red-600">
            Generation Error
          </h3>

          <p className="text-sm text-red-500 mt-2">
            {websiteData.error}
          </p>

          {websiteData.raw_response && (
            <pre className="mt-2 text-xs overflow-auto whitespace-pre-wrap">
              {websiteData.raw_response}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}