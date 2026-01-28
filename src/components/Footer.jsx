import {
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white">Prime Devs</h2>
          <p className="mt-3 text-sm text-gray-400">
            Building smart secure digital solutions for healthcare, business, and beyond.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Web & Mobile Development</a></li>
            <li><a href="#services" className="hover:text-white">Healthcare Software</a></li>
            <li><a href="#services" className="hover:text-white">AI & Automation</a></li>
            <li><a href="#services" className="hover:text-white">IoT Solutions</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#products" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Get in Touch</h3>

          <div className="flex items-center gap-2 text-sm mb-2">
            <Mail size={16} />
            <span>kidsdev001@gmail.com</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} />
            <span>Nairobi, Kenya</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Twitter size={20} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Prime Devs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
