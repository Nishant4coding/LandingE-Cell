import React from "react";
import { FaBuilding, FaDollarSign, FaChalkboardTeacher, FaLaptop, FaBalanceScale, FaUsers } from "react-icons/fa";

const PerksBenefits = () => {
  const perks = [
    {
      icon: FaBuilding,
      title: "Incubation Space",
      description: "Our incubation center will provide startups with well-equipped and modern office spaces, meeting rooms, and co-working areas. A conducive environment is essential for fostering creativity, collaboration, and productivity."
    },
    {
      icon: FaDollarSign,
      title: "Funding Support",
      description: "We will offer financial assistance in the form of seed funding or grants to help startups overcome initial challenges and fuel their growth. Early-stage funding can be crucial for turning ideas into viable businesses."
    },
    {
      icon: FaChalkboardTeacher,
      title: "Mentorship and Guidance",
      description: "Startups will have access to a network of experienced mentors and industry experts who can provide valuable guidance and insights. Regular mentorship sessions will help startups navigate challenges and make informed decisions."
    },
    {
      icon: FaLaptop,
      title: "Workshops and Training",
      description: "We will organize workshops and training programs on various entrepreneurial topics to equip startups with essential skills and knowledge. These sessions will cover areas such as business planning, marketing, and finance."
    },
    {
      icon: FaBalanceScale,
      title: "Legal and Financial Assistance",
      description: "Our incubation center will provide startups with access to legal and financial advisory services. Navigating legal complexities and financial planning are critical aspects of building a sustainable business."
    },
    {
      icon: FaUsers,
      title: "Networking Opportunities",
      description: "We will facilitate networking events and industry meetups, enabling startups to connect with potential investors, partners, and customers. Building a strong network is vital for gaining market traction and expanding the business."
    }
  ];

  return (
    <section className="bg-black py-16 p-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-semibold text-center mb-20">
          Perks and Benefits
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center text-white gap-6">
          {perks.map((perk, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-red hover:shadow-xl transition duration-300">
              <perk.icon className="text-5xl text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">{perk.title}</h3>
              <p className="text-gray-400">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerksBenefits;
