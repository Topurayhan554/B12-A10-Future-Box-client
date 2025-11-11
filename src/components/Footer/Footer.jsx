import React from "react";
import {
  FaHome,
  FaEnvelope,
  FaFileAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { SiX } from "react-icons/si"; // X icon

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h1 className="text-3xl font-extrabold text-orange-600">PawMart</h1>
          <p className="mt-3 text-gray-700 leading-relaxed">
            PawMart connects local pet owners and buyers for adoption and pet
            care products.
          </p>
        </div>

        {/* Useful Links with Icons */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-orange-600 transition-colors cursor-pointer">
              <FaHome /> Home
            </li>
            <li className="flex items-center gap-2 hover:text-orange-600 transition-colors cursor-pointer">
              <FaEnvelope /> Contact
            </li>
            <li className="flex items-center gap-2 hover:text-orange-600 transition-colors cursor-pointer">
              <FaFileAlt /> Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-gray-700">
            <a href="#" className="hover:text-orange-600 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              <SiX size={20} />
            </a>
            <a href="#" className="hover:text-orange-600 transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>

          <p className="mt-6 text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} PawMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
