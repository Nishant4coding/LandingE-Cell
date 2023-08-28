import React from "react";
import "../App.css"; // Import the CSS file

const PreviousSpeakers = () => {
  const speakers = [
    {
      name: "Mr. Ashneer Grover",
      title: "Founder & CEO, BharatPe",
      image: "https://www.smallseotools.co.uk/placeholder/150x150/D5D5D5/584959",
    },
    {
      name: "Mr. Ramana Telidevara",
      title: "CEO, CodeTantra",
      image: "https://www.smallseotools.co.uk/placeholder/150x150/D5D5D5/584959",
    },
    {
      name: "Prof. Dhruv Nath",
      title: "Director, Lead Angels",
      image: "https://www.smallseotools.co.uk/placeholder/150x150/D5D5D5/584959",
    },
    {
      name: "Jane Smith",
      title: "Investor & Entrepreneur",
      image: "https://www.smallseotools.co.uk/placeholder/150x150/D5D5D5/584959",
    },
    {
      name: "Jane Smith",
      title: "Investor & Entrepreneur",
      image: "https://www.smallseotools.co.uk/placeholder/150x150/D5D5D5/584959",
    },
    // Add more speakers as needed
  ];

  return (
    <section className="bg-black py-16 p-10">
      <div className="container mx-auto px-4 text-white">
        <h1 className="text-3xl font-semibold text-center mb-10">
          Previous Speakers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="speaker-card  p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="speaker-image mb-4 rounded-full"
              />
              <h2 className="text-lg font-semibold mb-2">{speaker.name}</h2>
              <p className="text-gray-400">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousSpeakers;
