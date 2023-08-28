import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Team = () => {
  const boardLeaders = [
    {
      name: "Vishal Devsaini",
      position: "President",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        email: "johndoe@example.com",
      },
    },
    {
      name: "Sakskam Chawla",
      position: "Vice President",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        email: "johndoe@example.com",
      },
    },
    {
      name: "Atharva Srivastava",
      position: "Sr. Advisor",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe",
        email: "johndoe@example.com",
      },
    },
    {
      name: "Vansh Taneja",
      position: "Treasurer",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/janesmith",
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
        email: "janesmith@example.com",
      },
    },
  ];

  const teamLeaders = [
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        email: "alicejohnson@example.com",
      },
    },
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        email: "alicejohnson@example.com",
      },
    },
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        email: "alicejohnson@example.com",
      },
    },
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        email: "alicejohnson@example.com",
      },
    },
    {
      name: "Lead Name",
      position: "Team Lead",
      imageUrl: "https://via.placeholder.com/150",
      social: {
        instagram: "https://www.instagram.com/bobwilliams",
        twitter: "https://twitter.com/bobwilliams",
        linkedin: "https://www.linkedin.com/in/bobwilliams",
        email: "bobwilliams@example.com",
      },
    },
  ];

  return (
    <div className="bg-black text-white">
      <div id="team" className="bg-black">
        <div className="text-center mb-10">
          <div className="bg-black inline-block p-2 rounded-r-3xl">
            <h2 className="text-4xl font-semibold">Team E-Cell</h2>
          </div>
        </div>

        <div className="container mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-8">
            {boardLeaders.map((member, index) => (
              <div
                key={index}
                className="shadow-red custom-color shadow-red rounded-lg p-4 text-center flex-shrink-0 w-72"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-black">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.position}</p>
                <div className="flex justify-center">
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-500 transition duration-300"
                  >
                    <FaInstagram className="text-3xl mr-2" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-500 transition duration-300"
                  >
                    <FaTwitter className="text-3xl mr-2" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-500 transition duration-300"
                  >
                    <FaLinkedin className="text-3xl mr-2" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-700 hover:text-blue-500 transition duration-300"
                  >
                    <FaEnvelope className="text-3xl" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {teamLeaders.map((member, index) => (
           
                <div
                  key={index}
                  className="shadow-red custom-color shadow-red rounded-lg p-6 text-center flex-shrink-0 w-60 text-black mb-10"
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.position}</p>
                  <div className="flex justify-center">
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-500 transition duration-300"
                    >
                      <FaInstagram className="text-xl mr-2" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-500 transition duration-300"
                    >
                      <FaTwitter className="text-xl mr-2" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-500 transition duration-300"
                    >
                      <FaLinkedin className="text-xl mr-2" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-700 hover:text-blue-500 transition duration-300"
                    >
                      <FaEnvelope className="text-xl" />
                    </a>
                  </div>
                </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
