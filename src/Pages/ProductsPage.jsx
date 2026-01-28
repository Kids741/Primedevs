import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// SAMPLE DATA — Replace with your real product data later
const products = [
  {
    id: 1,
    name: "Mood Track wellness app",
    description: "Track, visualize and improve your emotional wellbeing with AI insights.",
    image: "/src/assets/Moodtrack.jpg",
    link: "https://moodtrack-moodtrack.vercel.app/",
  },
  {
    id: 2,
    name: "Navoregwa bussiness ERP",
    description: "A scalabe ERP to manage business operations efficiently.",
    image: "/src/assets/erp.jpg",
    link: "https://incomparable-erpsystem.netlify.app/",
  },
  {
    id: 3,
    name: "Medical AI Assistant",
    description: "An AI-powered clinical assistant for symptom checking and triage.",
    image: "/src/assets/aiassistant.JPG",
  },
  {
    id: 3,
    name: "Queue Management System",
    description: "Smart queue automation for hospitals and clinics.",
    image: "/src/assets/queue system.jpg",
  },
];

export default function Products() {
  const handleContactClick = (e) => {
    e.preventDefault();
    console.log("Contact button clicked");
    const contactSection = document.getElementById("contact");
    console.log("Contact section found:", contactSection);
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
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            <Card className="rounded-2xl shadow-sm hover:shadow-xl transition-all bg-white overflow-hidden border border-gray-100 h-full flex flex-col">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />

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
