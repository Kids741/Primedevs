import { motion } from "framer-motion";
import healthtechImg from "../assets/healthtech.jpg";
import visionImg from "../assets/vision.jpg";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Empowering healthcare through intelligent software, automation, and meaningful innovation.
        </p>
      </motion.div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={healthtechImg}
          alt="Mission"
          className="rounded-3xl shadow-xl object-cover h-80 w-full"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We exist to build modern, efficient, and intelligent healthcare technology that improves care delivery, enhances clinical workflows, and empowers both patients and medical professionals.
          </p>
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            To pioneer Africa's most impactful healthcare technologies—AI assistants, automation systems, HMIS platforms, and diagnostic innovations—making quality care more accessible and intelligent.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={visionImg}
          alt="Vision"
          className="rounded-3xl shadow-xl object-cover h-80 w-full"
        />
      </div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
        <p className="text-gray-600 mt-2">The principles that guide our innovation and operations.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[{
          title: "Innovation",
          desc: "We push boundaries to build transformative healthcare solutions.",
        },
        {
          title: "Impact",
          desc: "Everything we build aims to improve real lives and real medical workflows.",
        },
        {
          title: "Excellence",
          desc: "We maintain high standards in engineering, design, and healthcare ethics.",
        }].map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
            <p className="text-gray-600 text-lg">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
