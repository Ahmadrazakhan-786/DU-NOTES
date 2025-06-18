import React from "react";
import { Github } from "lucide-react";

const team = [
  {
    name: "Ahmad",
    role: "Frontend Developer",
    image: "/ahmad.jpg",
    github: "https://github.com/ahmad",
  },
  {
    name: "Zaid",
    role: "Backend Developer",
    image: "/zaid.jpg",
    github: "https://github.com/zaid",
  },
  {
    name: "Ashir",
    role: "Owner",
    image: "/ashir.jpg",
    github: "https://github.com/ashir",
  },
];

const About = ({ dark }) => {
  return (
    <section
      className={`min-h-screen px-6 py-20 transition-all duration-300 ${
        dark ? "text-white bg-[#2c2c2c]" : "text-black bg-[#fefede]"
      }`}
    >
      <h1
        className={`text-4xl font-bold text-center mb-12 ${
          dark ? "text-white" : "text-black"
        }`}
      >
        Meet the Team 👨‍💻
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 flex flex-col items-center transition-all duration-300 transform border border-white 
              ${
                dark
                  ? "bg-[#1e1e2f]/60 hover:shadow-[0_0_15px_#ffffff50]"
                  : "bg-white/90 hover:shadow-[0_0_20px_#00000020]"
              }
              hover:scale-[1.05] hover:border-white`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-500"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-sm opacity-80 mb-4">{member.role}</p>
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-blue-500 transition" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
