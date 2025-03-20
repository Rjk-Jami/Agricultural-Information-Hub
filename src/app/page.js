import Image from "next/image";
import styles from "./page.module.css";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
   <div className="container mx-auto px-4 py-8">
    <section className="py-12 md:py-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">Agricultural Information Hub</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Your comprehensive resource for farming guides, crop information, pest control strategies, and expert
            agricultural advice.
          </p>
          <div className="flex items-center justify-center w-fit mx-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg">
            Explore Resources <ArrowRight className="ml-2 h-5 w-5" />
          </div>
        </div>
      </section>

      
   </div>
  );
}
