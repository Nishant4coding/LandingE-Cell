import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-center mb-10">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl text-yellow-400 font-semibold mb-2">
              Entrepreneurship Cell <br /> Galgotias University
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Entrepreneurship Cell, Galgotias University strives to stimulate
              and encourage entrepreneurship and innovation, both within
              Entrepreneurship Cell and beyond.
            </p>
          </div>
          <div className="mb-8 md:mb-0 text-center">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300 block"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300 block"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300 block"
              >
                Events
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300 block"
              >
                Team
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300 block"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Contact Us
            </h3>
            <div className="flex items-center mb-4">
              <FaPhone className="mr-2 text-yellow-400" />
              <span>(406) 555-0120</span>
            </div>
            <div className="flex items-center  mb-4">
              <FaEnvelope className="mr-2 text-yellow-400" />
              <a
                href="mailto:ecell@galgotiasuniversity.edu.in"
                className="hover:text-white transition duration-300"
              >
                ecell@galgotiasuniversity.edu.in
              </a>
            </div>
            <div className="flex items-center ">
              <MdLocationPin className=" text-5xl mr-2 text-yellow-400" />
              <p>
                Plot No.2, Sector 17-A Yamuna Expressway, Greater Noida, Gautam
                Buddh Nagar, Uttar Pradesh, India Opposite Buddh International
                Circuit.
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-lg text-gray-400">
          © 2023 Entrepreneurship Cell, Galgotias University. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
