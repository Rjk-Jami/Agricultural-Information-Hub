"use client";
import { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState("grains");

  const grains = [
    {
      name: "Wheat",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Cool season crop, requires moderate rainfall and temperatures between 21°C and 24°C.",
      soilRequirements: "Well-drained loamy soil with pH between 6.0 and 7.0.",
      harvesting: "Harvest when grain is hard and moisture content is below 14%.",
      nutritionalValue: "Rich in carbohydrates, protein, fiber, and B vitamins.",
    },
    {
      name: "Rice",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Warm climate crop, requires high humidity and temperatures between 20°C and 35°C.",
      soilRequirements: "Clay or loamy soil with good water retention and pH between 5.5 and 6.5.",
      harvesting: "Harvest when 80-85% of the grains turn golden yellow.",
      nutritionalValue: "Good source of carbohydrates, contains some protein and B vitamins.",
    },
    {
      name: "Corn (Maize)",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Warm season crop, requires full sun and temperatures between 18°C and 32°C.",
      soilRequirements: "Well-drained, fertile soil with pH between 5.8 and 7.0.",
      harvesting: "Sweet corn is harvested when kernels are plump and milky; field corn when kernels are dry.",
      nutritionalValue: "Rich in carbohydrates, fiber, vitamin C, and antioxidants.",
    },
    {
      name: "Barley",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Cool season crop, adaptable to various climates, prefers temperatures between 15°C and 30°C.",
      soilRequirements: "Well-drained, fertile soil with pH between 6.0 and 7.0.",
      harvesting: "Harvest when grain is hard and moisture content is around 13-14%.",
      nutritionalValue: "Good source of fiber, manganese, selenium, and B vitamins.",
    },
  ];

  const vegetables = [
    {
      name: "Tomatoes",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Warm season crop, requires full sun and temperatures between 21°C and 24°C.",
      soilRequirements: "Well-drained, fertile soil with pH between 6.0 and 6.8.",
      harvesting: "Harvest when fruits are firm and fully colored.",
      nutritionalValue: "Rich in vitamin C, potassium, folate, and vitamin K.",
    },
    {
      name: "Carrots",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Cool season crop, requires full sun to partial shade and temperatures between 16°C and 21°C.",
      soilRequirements: "Deep, loose, well-drained soil with pH between 6.0 and 6.8.",
      harvesting: "Harvest when roots reach desired size, typically 2-3 months after planting.",
      nutritionalValue: "Excellent source of beta-carotene, fiber, vitamin K, and potassium.",
    },
    {
      name: "Spinach",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Cool season crop, prefers partial shade and temperatures between 10°C and 21°C.",
      soilRequirements: "Rich, well-drained soil with pH between 6.5 and 7.5.",
      harvesting: "Harvest outer leaves when they reach desired size, allowing plant to continue growing.",
      nutritionalValue: "High in iron, calcium, vitamins A, C, and K.",
    },
    {
      name: "Potatoes",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Cool season crop, requires full sun and temperatures between 15°C and 20°C.",
      soilRequirements: "Loose, well-drained soil with pH between 5.0 and 6.5.",
      harvesting: "Harvest when plant tops begin to die back and tubers have reached desired size.",
      nutritionalValue: "Good source of vitamin C, potassium, and vitamin B6.",
    },
  ];

  const fruits = [
    {
      name: "Apples",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Requires full sun and moderate temperatures, with a winter chilling period.",
      soilRequirements: "Well-drained, loamy soil with pH between 6.0 and 7.0.",
      harvesting: "Harvest when fruits are firm, colored, and easily detached from the tree.",
      nutritionalValue: "Good source of fiber, vitamin C, and various antioxidants.",
    },
    {
      name: "Strawberries",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Prefers full sun and temperatures between 15°C and 26°C.",
      soilRequirements: "Well-drained, sandy loam with pH between 5.5 and 6.5.",
      harvesting: "Harvest when fruits are fully red with no white or green areas.",
      nutritionalValue: "Rich in vitamin C, manganese, folate, and antioxidants.",
    },
    {
      name: "Grapes",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Requires full sun and warm temperatures, with good air circulation.",
      soilRequirements: "Well-drained soil with pH between 5.5 and 7.0.",
      harvesting: "Harvest entire clusters when grapes reach desired sweetness and color.",
      nutritionalValue: "Contains resveratrol, antioxidants, vitamins K and C.",
    },
  ];

  const cashCrops = [
    {
      name: "Cotton",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Warm season crop, requires full sun and temperatures between 21°C and 35°C.",
      soilRequirements: "Well-drained, deep soil with pH between 5.5 and 8.0.",
      harvesting: "Harvest when bolls are fully open and cotton is dry.",
      nutritionalValue: "Not consumed as food.",
    },
    {
      name: "Coffee",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Tropical crop, prefers partial shade and temperatures between 15°C and 24°C.",
      soilRequirements: "Well-drained, slightly acidic soil with pH between 5.0 and 6.0.",
      harvesting: "Harvest when cherries are bright red and firm.",
      nutritionalValue: "Contains caffeine, antioxidants, and small amounts of nutrients.",
    },
    {
      name: "Sugarcane",
      image: "/placeholder.svg?height=200&width=300",
      growingConditions: "Tropical to subtropical crop, requires full sun and temperatures between 24°C and 30°C.",
      soilRequirements: "Well-drained, fertile soil with pH between 5.0 and 8.5.",
      harvesting: "Harvest when canes reach maturity, typically 10-12 months after planting.",
      nutritionalValue: "Source of sucrose, contains some minerals and antioxidants.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Crop Guides</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our farming guides for various crops, their growing conditions, and care tips.
        </p>
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("grains")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Grains
        </button>
        <button
          onClick={() => setActiveTab("vegetables")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Vegetables
        </button>
        <button
          onClick={() => setActiveTab("fruits")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Fruits
        </button>
        <button
          onClick={() => setActiveTab("cashCrops")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Cash Crops
        </button>
      </div>

      {activeTab === "grains" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grains.map((grain, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-lg">
              <img src={grain.image} alt={grain.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-2xl font-bold mb-2">{grain.name}</h3>
              <p className="text-sm text-gray-700">{grain.growingConditions}</p>
              <p className="text-sm text-gray-700 mt-2">{grain.soilRequirements}</p>
              <p className="text-sm text-gray-700 mt-2">{grain.harvesting}</p>
              <p className="text-sm text-gray-700 mt-2">{grain.nutritionalValue}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "vegetables" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vegetables.map((vegetable, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-lg">
              <img src={vegetable.image} alt={vegetable.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-2xl font-bold mb-2">{vegetable.name}</h3>
              <p className="text-sm text-gray-700">{vegetable.growingConditions}</p>
              <p className="text-sm text-gray-700 mt-2">{vegetable.soilRequirements}</p>
              <p className="text-sm text-gray-700 mt-2">{vegetable.harvesting}</p>
              <p className="text-sm text-gray-700 mt-2">{vegetable.nutritionalValue}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "fruits" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fruits.map((fruit, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-lg">
              <img src={fruit.image} alt={fruit.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-2xl font-bold mb-2">{fruit.name}</h3>
              <p className="text-sm text-gray-700">{fruit.growingConditions}</p>
              <p className="text-sm text-gray-700 mt-2">{fruit.soilRequirements}</p>
              <p className="text-sm text-gray-700 mt-2">{fruit.harvesting}</p>
              <p className="text-sm text-gray-700 mt-2">{fruit.nutritionalValue}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "cashCrops" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cashCrops.map((cashCrop, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-lg">
              <img src={cashCrop.image} alt={cashCrop.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-2xl font-bold mb-2">{cashCrop.name}</h3>
              <p className="text-sm text-gray-700">{cashCrop.growingConditions}</p>
              <p className="text-sm text-gray-700 mt-2">{cashCrop.soilRequirements}</p>
              <p className="text-sm text-gray-700 mt-2">{cashCrop.harvesting}</p>
              <p className="text-sm text-gray-700 mt-2">{cashCrop.nutritionalValue}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
