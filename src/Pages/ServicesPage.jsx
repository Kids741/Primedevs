import {
  Code,
  Smartphone,
  Bot,
  Cpu,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Web Applications",
    description:
      "We build fast, secure, and scalable web applications using modern frameworks like React, Node.js, and cloud-native architectures.",
    icon: <Code size={28} />,
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps for Android and iOS focused on performance, usability, and real-world impact.",
    icon: <Smartphone size={28} />,
  },
  {
    title: "AI Chatbots",
    description:
      "Intelligent AI-powered chatbots for customer support, healthcare triage, automation, and personalized user experiences.",
    icon: <Bot size={28} />,
  },
  {
    title: "IoT Backend Integration",
    description:
      "Secure backend systems for IoT devices including data ingestion, real-time monitoring, APIs, and analytics.",
    icon: <Cpu size={28} />,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Hero */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          We build reliable digital products that help businesses and organizations
          scale through technology.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 hover:shadow-xl transition shadow-sm border border-gray-100"
          >
            <div className="text-indigo-600 mb-4">{service.icon}</div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {service.description}
            </p>

            <button className="inline-flex items-center text-indigo-600 hover:text-indigo-700 text-sm font-medium">
              Learn more <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            How We Work
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-left">
            {[
              "Understand your problem & goals",
              "Design scalable architecture",
              "Build, test & iterate",
              "Deploy, monitor & improve",
            ].map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <span className="text-indigo-600 font-bold text-lg">
                  0{index + 1}
                </span>
                <p className="mt-3 text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's Build Your Next Product
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto px-4">
          Have an idea? Let's turn it into a scalable solution.
        </p>
      </section>
    </div>
  );
};

export default Services;
