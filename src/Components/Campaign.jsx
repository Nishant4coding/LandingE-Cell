import React from "react";
import { FaClock, FaTrophy, FaBullhorn, FaIndustry, FaUserFriends } from "react-icons/fa";

const Campaign = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-4 text-white text-center">
          Campaign and Mini-Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-6 text-center text-white">
          
          {/* Conclave Quiz and Competitions */}
          <div className="bg-black p-6 rounded-lg shadow-red hover:shadow-xl transition duration-300 ">
            <FaTrophy className="text-5xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Conclave Quiz and Competitions</h3>
            <p className="text-gray-400">
              Engage participants with interactive quizzes and competitions during the conclave.
            </p>
          </div>
          {/* Internal Team Pitching Competitions */}
          <div className="bg-black p-6 rounded-lg shadow-red hover:shadow-xl transition duration-300">
            <FaBullhorn className="text-5xl text-purple-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Internal Team Pitching Competitions</h3>
            <p className="text-gray-400">
              Provide a platform for internal teams to pitch their innovative ideas and projects.
            </p>
          </div>
          {/* Industry Campaign - Connecting Ecell Students with Real-World Industries */}
          <div className="bg-black p-6 rounded-lg shadow-red hover:shadow-red transition duration-300">
            <FaIndustry className="text-5xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Industry Campaign - Connecting Ecell Students with Real-World Industries</h3>
            <p className="text-gray-400">
              Foster connections between Ecell students and industries through targeted campaigns.
            </p>
          </div>
          {/* Mentors' Meet and Industry Interaction */}
          <div className="bg-black p-6 rounded-lg shadow-red hover:shadow-xl transition duration-300">
            <FaUserFriends className="text-5xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Mentors' Meet and Industry Interaction</h3>
            <p className="text-gray-400">
              Facilitate meaningful interactions between mentors and students in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
