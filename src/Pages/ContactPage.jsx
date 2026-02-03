import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {

  return (
    <section className="w-full mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question, feedback, or a
          project in mind — reach out!
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-6 p-6 rounded-2xl shadow-xl bg-white">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>

          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-blue-600" />
            <p className="text-gray-700">kidsdev001@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-blue-600" />
            <p className="text-gray-700">+254 112101677</p>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="h-6 w-6 text-blue-600" />
            <p className="text-gray-700">Nairobi, Kenya</p>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-56 bg-gray-200 rounded-xl mt-4 flex items-center justify-center text-gray-600">
            <iframe
                src="https://maps.google.com/maps?q=Kenyatta+National+Hospital&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-56 rounded-xl border-none"
                loading="lazy"
            ></iframe>

          </div>
        </div>

        {/* Contact Form - Tally */}
        <div className="flex flex-col gap-4 p-6 rounded-2xl shadow-xl bg-white">
          <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
          <iframe
            src="https://tally.so/embed/jaPE7E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact form"
            className="min-h-[500px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}