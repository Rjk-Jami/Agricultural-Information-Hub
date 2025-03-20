import Image from "next/image";
import styles from "./page.module.css";
import { ArrowRight, BookOpen, Bug, Leaf } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12 md:py-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            Agricultural Information Hub
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Your comprehensive resource for farming guides, crop information,
            pest control strategies, and expert agricultural advice.
          </p>
          <div className="flex items-center justify-center w-fit mx-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg">
            Explore Resources <ArrowRight className="ml-2 h-5 w-5" />
          </div>
        </div>
      </section>

      {/*  */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          Featured Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" border border-green-100 hover:shadow-lg transition-shadow">
            <div className="p-6 bg-green-50 rounded-t-lg">
              <h1 className="flex items-center text-green-800 text-2xl font-bolds">
                <BookOpen className="mr-2 h-6 w-6" /> Farming Guides
              </h1>
              <p className="text-sm text-gray-600">
                Step-by-step instructions for successful farming
              </p>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Explore our collection of detailed farming guides covering
                various techniques, seasonal practices, and methodologies for
                different crop types.
              </p>
            </div>
            <div className="px-6 pb-6">
              <Link href="/farming-guides" className="w-full">
                <div className="w-full rounded-xl text-center py-3 text-white   bg-green-600 hover:bg-green-700">
                  View Guides
                </div>
              </Link>
            </div>
          </div>
          <div className=" border border-green-100 hover:shadow-lg transition-shadow">
            <div className="p-6 bg-green-50 rounded-t-lg">
              <h1 className="flex items-center text-green-800 text-2xl font-bolds">
                <Leaf className="mr-2 h-6 w-6" /> Crop Details
              </h1>
              <p className="text-sm text-gray-600">
              Comprehensive information on various crops
              </p>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
              Discover detailed profiles of different crops including varieties, cultivation methods, soil
              requirements, and harvesting techniques.
              </p>
            </div>
            <div className="px-6 pb-6">
              <Link href="/crop-details" className="w-full">
                <div className="w-full rounded-xl text-center py-3 text-white   bg-green-600 hover:bg-green-700">
                  View Guides
                </div>
              </Link>
            </div>
          </div>
          <div className=" border border-green-100 hover:shadow-lg transition-shadow">
            <div className="p-6 bg-green-50 rounded-t-lg">
              <h1 className="flex items-center text-green-800 text-2xl font-bolds">
                <Bug className="mr-2 h-6 w-6" /> Pest Control
              </h1>
              <p className="text-sm text-gray-600">
              Effective strategies for managing pests
              </p>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
              Learn about integrated pest management strategies, biological controls, and organic remedies to protect
              your crops.
              </p>
            </div>
            <div className="px-6 pb-6">
              <Link href="/pest-control" className="w-full">
                <div className="w-full rounded-xl text-center py-3 text-white   bg-green-600 hover:bg-green-700">
                  View Guides
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
