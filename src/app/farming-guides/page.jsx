"use client"
import Image from "next/image";
import { useState } from "react";
const seasonalGuides = [
  {
    title: "Spring Planting Guide",
    description: "Essential tips for successful spring planting",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Soil preparation techniques", "Optimal planting times", "Seedling care", "Early pest management"],
  },
  {
    title: "Summer Crop Maintenance",
    description: "Maintaining healthy crops during hot summer months",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Irrigation strategies", "Heat stress management", "Summer pest control", "Mulching techniques"],
  },
  {
    title: "Fall Harvest Techniques",
    description: "Maximizing your fall harvest yield",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Harvest timing indicators", "Storage preparation", "Equipment maintenance", "Post-harvest soil care"],
  },
  {
    title: "Winter Farm Preparation",
    description: "Preparing your farm for the winter season",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Winterizing equipment", "Soil conservation", "Cover crop selection", "Planning for spring"],
  },
];

const cropTypeGuides = [
  {
    title: "Grain Crop Guide",
    description: "Complete guide to growing grain crops",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Wheat, corn, and rice cultivation", "Soil requirements", "Irrigation needs", "Common diseases"],
  },
  {
    title: "Vegetable Farming",
    description: "Best practices for vegetable cultivation",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Leafy greens cultivation", "Root vegetable care", "Companion planting", "Organic pest management"],
  },
  {
    title: "Fruit Orchard Management",
    description: "Managing productive fruit orchards",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Tree spacing and pruning", "Pollination strategies", "Fruit thinning techniques", "Harvest and storage"],
  },
];

const techniqueGuides = [
  {
    title: "Organic Farming Methods",
    description: "Implementing organic farming practices",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Natural fertilizers", "Biological pest control", "Crop rotation", "Certification process"],
  },
  {
    title: "Hydroponics Basics",
    description: "Getting started with hydroponic farming",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["System setup", "Nutrient solutions", "Plant selection", "Maintenance routines"],
  },
  {
    title: "Permaculture Design",
    description: "Sustainable permaculture farming techniques",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Land assessment", "Ecosystem integration", "Water management", "Food forest design"],
  },
];

const beginnerGuides = [
  {
    title: "Starting Your First Garden",
    description: "Essential guide for first-time gardeners",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Site selection", "Basic tools needed", "Beginner-friendly crops", "Simple irrigation"],
  },
  {
    title: "Understanding Soil Basics",
    description: "Learn about soil types and preparation",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Soil testing", "Improving soil quality", "Composting basics", "pH balancing"],
  },
  {
    title: "Seed Starting Guide",
    description: "How to successfully start seeds for your garden",
    image: "/placeholder.svg?height=200&width=300",
    topics: ["Seed selection", "Germination techniques", "Transplanting seedlings", "Common problems"],
  },
];
const page = () => {
    const [activeTab, setActiveTab] = useState("Seasonal");
    const renderGuides = (guides) => {
      return guides.map((guide, index) => (
        <div key={index} className="max-w-xs mx-auto bg-white shadow-lg rounded-lg p-4">
          
          <Image src={guide.image} alt={guide.title} width={300} height={200} className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
          <p className="text-gray-600 mb-4">{guide.description}</p>
          <ul className="list-disc pl-4 space-y-2">
            {guide.topics.map((topic, idx) => (
              <li key={idx} className="text-gray-600">{topic}</li>
            ))}
          </ul>
        </div>
      ));
    };
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Farming Guides
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive collection of farming guides covering
          various techniques, seasonal practices, and methodologies for
          different crop types.
        </p>
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("Seasonal")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Seasonal
        </button>
        <button
          onClick={() => setActiveTab("cropType")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Crop Type
        </button>
        <button
          onClick={() => setActiveTab("techniques")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Techniques
        </button>
        <button
          onClick={() => setActiveTab("beginner")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Beginner Guides
        </button>
      </div>
      {activeTab === "Seasonal" && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{renderGuides(seasonalGuides)}</div>}
      {activeTab === "cropType" && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{renderGuides(cropTypeGuides)}</div>}
      {activeTab === "techniques" && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{renderGuides(techniqueGuides)}</div>}
      {activeTab === "beginner" && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{renderGuides(beginnerGuides)}</div>}
    </div>
  );
};

export default page;
