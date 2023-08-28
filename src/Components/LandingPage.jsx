import React, { useState } from "react";
import {
  FaArrowRight,
  FaCalendar,
  FaMicrophone,
  FaBullhorn,
  FaArrowDown,
} from "react-icons/fa"; // Import icons from React Icons
import { FaBars, FaTimes } from "react-icons/fa";

import Team from "./Team";
import Footer from "./Footer";
import WorkshopsActivities from "./WorkshopsActivities";
import Campaign from "./Campaign";
import PerksBenefits from "./PerksBenifits";
import EventPage from "./EventPage";
import InitiativesPage from "./InitiativesPage";
import Divider from "./Divider";
import PreviousSpeakers from "./PreviousSpeaker";
import About from "./About";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <>
      <div className="bg-black text-white " >


        {/* Add more sections here */}


    <nav className="fixed top-0 left-0 bg-transparent text-white text-2xl p-4 flex flex-col items-left justify-start w-full h-40">
      <div>
        <FaBars className="text-4xl cursor-pointer" onClick={toggleMenu} />
      </div>
      {isMenuOpen && (
        <div className="flex flex-col space-y-2 items-center custom-flex  backdrop-blur-md" onClick={handleClose}>
          <a
            href="#about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#incentives"
            className="hover:text-yellow-400 transition duration-300"
          >
            Initiatives
          </a>
          <a
            href="#speaker"
            className="hover:text-yellow-400 transition duration-300"
          >
            Speakers
          </a>
          <a
            href="#workshop"
            className="hover:text-yellow-400 transition duration-300"
          >
            Workshops
          </a>
          <a
            href="#campaign"
            className="hover:text-yellow-400 transition duration-300"
          >
            Campaign
          </a>
          <a
            href="#perks"
            className="hover:text-yellow-400 transition duration-300"
          >
            Perks
          </a>
          <a
            href="#events"
            className="hover:text-yellow-400 transition duration-300"
          >
            Events
          </a>
          <a
            href="#team"
            className="hover:text-yellow-400 transition duration-300"
          >
            Team
          </a>
        </div>
      )}
    </nav>
    <section className="py-10">
          <div className="container mx-auto text-center mt-40 mb-40">
            <h1 className="header font-bold mb-4">
              Welcome to Entrepreneurship Cell
            </h1>
            <p className="header font-bold mb-8">Galgotias University</p>
            <a
              href="#about"
              className="text-golden hover:text-red transition duration-300"
            >
              <FaArrowDown className="inline-block text-7xl arrow-animation"  onClick={handleClose}/>
            </a>
          </div>
        </section>
    </div>
      <Divider />
      <div id="about">
        <About />
      </div>
      <Divider />
      <div id="incentives">
        <InitiativesPage />
      </div>
      <Divider />
      <div id="speaker">
        <PreviousSpeakers />
      </div>
      <Divider />
      <div id="workshop">
        <WorkshopsActivities />
      </div>
      <Divider />
      <div id="campaign">
        <Campaign />
      </div>
      <Divider />
      <div id="perks">
        <PerksBenefits />
      </div>
      <Divider />
      <div id="events">
        <EventPage />
      </div>
      <Divider />
      <div id="team">
        <Team />
      </div>
    </>
  );
};

export default LandingPage;
