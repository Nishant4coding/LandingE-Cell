import React from "react";
import '../App.css'

const InitiativesPage = () => {
  const initiatives = [
    {
      title: "Idea Validation",
      description:
        "Validate your startup ideas through workshops and expert guidance.",
      icon: "🧠",
    },
    {
      title: "Investment Platform",
      description:
        "Connect with investors and raise funding for your startup.",
      icon: "💰",
    },
    {
      title: "Startup Services",
      description:
        "Access essential services and resources for scaling your startup.",
      icon: "🚀",
    },
    {
      title: "E-resources",
      description:
        "Access a library of valuable resources, guides, and tools.",
      icon: "📚",
    },
  ];

  return (
    <section className="bg-black py-16 text-center p-10">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-center text-4xl  font-semibold mb-20">
          Our Initiatives
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="shadow-red  p-6 rounded-lg  hover:shadow-xl transition duration-300"
            >
              <div className="initiative-icon">{initiative.icon}</div>
              <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
                {initiative.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesPage;
