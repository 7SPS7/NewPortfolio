import React from "react";
import { FaAngleRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import p1 from "../assets/4p.png";
import p2 from "../assets/1p.png";


const projects = [
   {
     id: "01",
     title: "CleverTrail",
     description: "An innovative education platform offering structured courses and progress tracking for effective online learning.",
     image: p1,
     skills: ["HTML", "CSS", "JavaScript", "Firebase"],
     link: "https://7sps7.github.io/Clever_Trail/index.html",
     github: "https://github.com/7SPS7/Clever_Trail"
   },
  {
      id: "02",
      title: "SyncNotes",
      description: "An intuitive note-taking app that syncs across all your devices. Keep your ideas, tasks, and reminders organized and accessible anytime, anywhere.",
      image: p2,
      skills: ["React.js", "Tailwind", "Redux"],
      link: "https://sync-notes-app-git-main-shashwats-projects-d735ad83.vercel.app/",
      github: "https://github.com/7SPS7/SyncNotes-App"
    },
  // {
  //   id: "03",
  //   title: "Blog Template",
  //   description: "A performant blog template with markdown support and SEO optimization.",
  //   image: tp,
  //   skills: ["Next.js", "Markdown", "Vercel"],
  //   link: "#",
  //   github: "#"
  // }
];

const Project = () => {
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
            A showcase of my best work combining design and functionality
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
          <a href="/Projects">
          <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20">
            View More Projects <FaAngleRight className="inline ml-2" />
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;