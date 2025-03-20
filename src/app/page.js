import Image from "next/image";
import styles from "./page.module.css";
import { ArrowRight, BookOpen, Bug, Leaf, MessageSquare } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <BookOpen className="mr-2 h-6 w-6" />,
              title: "Farming Guides",
              description: "Step-by-step instructions for successful farming",
              content:
                "Explore our collection of detailed farming guides covering various techniques, seasonal practices, and methodologies for different crop types.",
              link: "/farming-guides",
            },
            {
              icon: <Leaf className="mr-2 h-6 w-6" />,
              title: "Crop Details",
              description: "Comprehensive information on various crops",
              content:
                "Discover detailed profiles of different crops including varieties, cultivation methods, soil requirements, and harvesting techniques.",
              link: "/crop-details",
            },
            {
              icon: <Bug className="mr-2 h-6 w-6" />,
              title: "Pest Control",
              description: "Effective strategies for managing pests",
              content:
                "Learn about integrated pest management strategies, biological controls, and organic remedies to protect your crops.",
              link: "/pest-control",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="border border-green-100 hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <div className="p-6 bg-green-50 rounded-t-lg">
                <h1 className="flex items-center text-green-800 text-2xl font-bold">
                  {card.icon} {card.title}
                </h1>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-600">{card.content}</p>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <Link href={card.link} className="w-full">
                  <div className="w-full rounded-xl text-center py-3 text-white bg-green-600 hover:bg-green-700">
                    View Guides
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>


      </section>
      <section className="bg-green-50 rounded-xl p-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Need Expert Advice?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Connect with agricultural experts for personalized guidance and support.
          </p>
          <Link href="/contact">
            <div className="text-white py-3 px-6 rounded-lg w-fit mx-auto bg-green-600 hover:bg-green-700 flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" /> Contact Experts
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
