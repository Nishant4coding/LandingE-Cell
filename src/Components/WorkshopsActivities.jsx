import React from "react";
import { FaBrain, FaUsers, FaBullhorn, FaTrophy } from "react-icons/fa";

const WorkshopsActivities = () => {
  return (
    <section className="bg-black py-16 text-white p-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Workshops & Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {/* Brainstorming */}
          <div className="bg-black p-6 rounded-lg shadow-red hover:shadow-xl transition duration-300">
            <FaBrain className="text-5xl text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Brainstorming Workshops</h3>
            <p className="text-gray-400">
              Engage in creative brainstorming sessions to foster innovative ideas.
            </p>
          </div>
          {/* Team Building */}
          <div className="bg-black p-6 rounded-lg shadow-red hover:shadow-xl transition duration-300">
            <FaUsers className="text-5xl text-green-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Team Building Sessions</h3>
            <p className="text-gray-400">
              Strengthen teamwork skills through interactive team building activities.
            </p>
          </div>
          {/* Speaker Series */}
          <div className="bg-black p-6 rounded-lg shadow-red hover:shadow-xl transition duration-300">
            <FaBullhorn className="text-5xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Speaker Series</h3>
            <p className="text-gray-400">
              Attend insightful speaker sessions from industry experts.
            </p>
          </div>
          {/* Internal Competitions */}
          <div className="bg-black p-6 rounded-lg shadow-red hover:shadow-xl transition duration-300">
            <FaTrophy className="text-5xl text-purple-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Internal Team Competitions</h3>
            <p className="text-gray-400">
              Participate in exciting competitions to showcase your skills and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsActivities;
