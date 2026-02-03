import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import moodtrackImg from "../assets/Moodtrack.jpg";
import erpImg from "../assets/erp.jpg";
import aiassistantImg from "../assets/aiassistant.JPG";
import queueImg from "../assets/queue system.jpg";

// SAMPLE DATA — Replace with your real product data later
const products = [
  {
    id: 1,
    name: "Mood Track wellness app",
    description: "Track, visualize and improve your emotional wellbeing with AI insights.",
    image: moodtrackImg,
    link: "https://moodtrack-moodtrack.vercel.app/",
  },
  {
    id: 2,
    name: "Navoregwa bussiness ERP",
    description: "A scalabe ERP to manage business operations efficiently.",
    image: erpImg,
    link: "https://incomparable-erpsystem.netlify.app/",
  },
  {
    id: 3,
    name: "Medical AI Assistant",
    description: "An AI-powered clinical assistant for symptom checking and triage.",
    image: aiassistantImg,
  },
  {
    id: 4,
    name: "Queue Management System",
    description: "Smart queue automation for hospitals and clinics.",
    image: queueImg,
  },
];

export default function Products() {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 md:px-16 lg:px-28">
      {/* HEADER */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center mb-6"
      >
        Our Products
      </motion.h1>

      <p className="text-gray-600 text-center max-w-2xl mb-10">
        Explore our suite of healthcare and wellness products designed to help individuals, hospitals, and businesses work smarter.
      </p>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="rounded-2xl shadow-sm hover:shadow-xl transition-all bg-white overflow-hidden border border-gray-100 h-full flex flex-col">
              <div className="relative h-48 w-full bg-gray-200">
                {!loadedImages[product.id] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onLoad={() => handleImageLoad(product.id)}
                  className={`h-48 w-full object-cover transition-opacity duration-300 ${loadedImages[product.id] ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>

              <CardContent className="p-5 flex flex-col gap-2 flex-grow">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600 text-sm flex-grow">{product.description}</p>

                <Button 
                  className="mt-4 w-fit group"
                  onClick={() => {
                    if (product.link) {
                      window.open(product.link, '_blank');
                    }
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-14 bg-white p-8 rounded-2xl shadow-md text-center max-w-3xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Want a Demo?</h2>
        <p className="text-gray-600 mb-6">
          Reach out to us to schedule a live demonstration of any of our systems.
        </p>
        <Button size="lg" onClick={handleContactClick}>Contact Us</Button>
      </motion.div>
    </div>
  );
}
