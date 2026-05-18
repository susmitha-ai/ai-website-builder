"use client";

import { useEffect, useState } from "react";
import { downloadHTML } from "../utils/export";
export default function PreviewPanel() {
  const [websiteData, setWebsiteData] = useState(null);

  useEffect(() => {
    const loadWebsiteData = () => {
      const storedData = localStorage.getItem("websiteData");

      if (storedData) {
        setWebsiteData(JSON.parse(storedData));
      }
    };

    // Initial load
    loadWebsiteData();

    // Listen for new generation
    window.addEventListener(
      "websiteGenerated",
      loadWebsiteData
    );

    return () => {
      window.removeEventListener(
        "websiteGenerated",
        loadWebsiteData
      );
    };
  }, []);

  return (
    <div className="h-screen bg-gray-100 p-8 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl min-h-full p-8 border">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            AI Live Preview
          </h2>

          <div className="space-x-3">
            <button className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300">
              Desktop
            </button>

            <button className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300">
              Mobile
            </button>
          </div>
        </div>

        {/* Empty State */}
        {!websiteData ? (
          <div className="h-[75vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-bold text-gray-700">
              Your AI Website
            </h1>

            <p className="mt-4 text-gray-500 text-lg">
              Generated website preview will appear here.
            </p>
          </div>
        ) : websiteData.error ? (
          /* Error State */
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-red-600">
              Generation Failed
            </h3>

            <p className="mt-2 text-red-500">
              {websiteData.error}
            </p>

            {websiteData.raw_response && (
              <pre className="mt-4 text-sm whitespace-pre-wrap overflow-auto">
                {websiteData.raw_response}
              </pre>
            )}
          </div>
        ) : (
          /* Website Preview */
          <div className="space-y-10">
            <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-3xl p-10 shadow-lg">
  <h1 className="text-5xl font-bold">
    {websiteData.websiteName}
  </h1>

  <p className="mt-4 text-xl">
    {websiteData.theme}
  </p>

  <button
    onClick={() => downloadHTML(websiteData)}
    className="mt-6 px-6 py-3 bg-white text-purple-600 font-bold rounded-xl hover:scale-105 transition"
  >
    Download Website
  </button>
</section>
        
            {/* Pages */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Pages
              </h2>

              <div className="flex flex-wrap gap-4">
                {websiteData.pages?.map((page, index) => (
                  <div
                    key={index}
                    className="px-5 py-3 bg-gray-200 rounded-xl font-medium"
                  >
                    {page}
                  </div>
                ))}
              </div>
            </section>

            {/* Sections */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Website Sections
              </h2>

              <div className="space-y-6">
                {websiteData.sections?.map(
                  (section, index) => (
                    <div
                      key={index}
                      className="border rounded-2xl p-6 shadow-sm bg-gray-50"
                    >
                      <p className="text-sm uppercase text-purple-500 font-bold">
                        {section.type}
                      </p>

                      <h3 className="text-2xl font-bold mt-2">
                        {section.heading}
                      </h3>

                      <p className="text-gray-600 mt-2">
                        {section.subheading}
                      </p>

                      {section.cta && (
                        <button className="mt-4 px-5 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl">
                          {section.cta}
                        </button>
                      )}
                    </div>
                  )
                )}
              </div>
            </section>

            {/* Styles */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Design System
              </h2>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-100 rounded-xl">
                  <p className="font-semibold">
                    Primary Color
                  </p>

                  <p>{websiteData.styles?.primaryColor}</p>
                </div>

                <div className="p-4 bg-gray-100 rounded-xl">
                  <p className="font-semibold">
                    Secondary Color
                  </p>

                  <p>{websiteData.styles?.secondaryColor}</p>
                </div>

                <div className="p-4 bg-gray-100 rounded-xl">
                  <p className="font-semibold">
                    Font
                  </p>

                  <p>{websiteData.styles?.font}</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}