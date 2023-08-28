import React from "react";
import { FaRocket } from "react-icons/fa";
import "../App.css"; // Import the CSS file

const About = () => {
  return (
    <section className="about-ecell bg-black  py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center  text-white mb-10">
          About Ecell
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="flex items-center text-white p-5">
              <p className=" text-xl text-left leading-relaxed">
                We are a dynamic and vibrant{" "}
                <span className="highlight-number">
                  Entrepreneurship Cell Galgotias University
                </span>{" "}
                committed to fostering innovation and supporting startups. With
                a track record of <span className="highlight-number">100+</span>{" "}
                startups nurtured, we empower entrepreneurs to realize their
                dreams.
              </p>
            </div>
            <div className=" flex custom-flex justify-center items-center ">
              <div
                className="about-card p-6 bg-gray-500 rounded-lg shadow-lg shadow-red m-10 w-60 "
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaRocket className="text-2xl text-yellow-400 mr-6 text-center" />
                <h2 className="text-xl font-semibold text-center text-white mb-4">
                  100+ Startups
                </h2>
              </div>
              <div
                className="about-card p-6 bg-gray-500 rounded-lg shadow-lg shadow-red  w-60 "
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaRocket className="text-2xl text-yellow-400 mr-6 text-center" />
                <h2 className="text-xl font-semibold text-center text-white mb-4">
                  800+ Members
                </h2>
              </div>
            </div>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-0 mobile ">
           
            <img
              src="https://www.smallseotools.co.uk/placeholder/600x300/D5D5D5/584959"
              alt="Event Image 3"
              className="shadow-red reflection mb-4 w-full h-30 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
            />
            {/* Add more event images ass needed */}
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;
