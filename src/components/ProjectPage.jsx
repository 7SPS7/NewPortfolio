import React from 'react';
import { FaAngleRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import p1 from "../assets/1p.png";
import p2 from "../assets/2p.png";
import p3 from "../assets/3p.png";
import p4 from "../assets/4p.png";
import p5 from "../assets/5p.png";

const projects = [
  {
    id: "01",
    title: "SyncNotes",
    description: "An intuitive note-taking app that syncs across all your devices. Keep your ideas, tasks, and reminders organized and accessible anytime, anywhere.",
    image: p1,
    skills: ["React.js", "Tailwind", "Redux"],
    link: "https://sync-notes-app-git-main-shashwats-projects-d735ad83.vercel.app/",
    github: "https://github.com/7SPS7/SyncNotes-App"
  },
  {
    id: "02",
    title: "ValueVilla",
    description: "Value Villa is a web platform designed to predict house values based on various parameters using a machine learning algorithm. The website allows users to input specific details about a property, such as location, size, number of rooms, and other relevant features, to receive an estimated market value.",
    image: p2,
    skills: ["HTML", "CSS","Javascript","Machine Learning"],
    link: "https://value-vila.onrender.com/",
    github: "https://github.com/7SPS7/Value_Vila"
  },
  {
    id: "03",
    title: "Old Portfolio Website",
    description: "portfolio website is a visually appealing and dynamic platform showcasing your skills, projects, and expertise as a Front-End Developer and Designer. It highlights your proficiency in HTML, CSS, JavaScript, and responsive design, along with your passion for creating innovative web experiences",
    image: p3,
    skills: ["HTML", "CSS", "JavaScript"],
    link: "https://7sps7.github.io/Portfolio_Website/",
    github: "https://github.com/7SPS7/Portfolio_Website"
  },
  {
    id: "04",
    title: "CleverTrail",
    description: "An innovative education platform offering structured courses and progress tracking for effective online learning.",
    image: p4,
    skills: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://7sps7.github.io/Clever_Trail/index.html",
    github: "https://github.com/7SPS7/Clever_Trail"
  },
  {
    id: "05",
    title: "New Portfolio Website",
    description: " React & Tailwind CSS portfolio website is a sleek, modern, and highly responsive platform that showcases your journey as a Front-End Developer and Designer. It reflects your expertise in React, Tailwind CSS, and UI/UX design, while ensuring a smooth and engaging user experience.",
    image: p5,
    skills: ["React.js", "Tailwind", "Routes"],
    link: "https://www.shashwatpratapsingh.in/",
    github: "https://github.com/7SPS7/NewPortfolio"
  },
];

const ProjectPage = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/50 mb-6 text-blue-400 font-medium">
            PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my frontend development work combining design and functionality
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gray-700 text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;