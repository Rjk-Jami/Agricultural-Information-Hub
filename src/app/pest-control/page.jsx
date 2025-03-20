"use client";
import React, { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState("prevention");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Pest Control Strategies
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn about integrated pest management (IPM) strategies including
          prevention, biological controls, and organic remedies to protect your
          crops.
        </p>
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("prevention")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Prevention
        </button>
        <button
          onClick={() => setActiveTab("biological")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Biological
        </button>
        <button
          onClick={() => setActiveTab("organic")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Organic
        </button>
      </div>
      {/* Prevention */}
      {activeTab === "prevention" && (
        <div className="bg-yellow-100 p-4 rounded-md mb-6">
          <h3 className="text-xl font-semibold text-green-700">
            Crop Rotation
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Change crops each season</li>
            <li>Include cover crops</li>
          </ul>
        </div>
      )}

      {/* Biological Controls */}
      {activeTab === "biological" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold text-green-700">
              Beneficial Insects
            </h3>
            <p className="text-gray-700">
              Introduce ladybugs to control aphids.
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold text-green-700">Neem Oil</h3>
            <p className="text-gray-700">
              Use neem oil to control various pests.
            </p>
          </div>
        </div>
      )}

      {/* Organic Remedies */}
      {activeTab === "organic" && (
        <div className="bg-green-100 p-4 rounded-md mb-6">
          <h3 className="text-xl font-semibold text-green-700">Garlic Spray</h3>
          <p className="text-gray-700">
            Spray garlic solution to repel insects.
          </p>
        </div>
      )}

      <div className="bg-green-50 p-4 rounded-md text-center">
        <p className="text-green-700">
          Always use pest control methods responsibly and ensure safety for your
          plants and the environment.
        </p>
      </div>
    </div>
  );
};

export default page;
