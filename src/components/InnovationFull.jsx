import React from 'react';
import { FaAngleRight, FaCode, FaLightbulb, FaMobile, FaRocket } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si';
import { TbBrandRedux } from "react-icons/tb";
import developerImage from '../assets/profile-pic.jpg'; // Your photo

const InnovationFull = () => {
  const innovations = [
    {
      title: "Cutting-Edge Solutions",
      description: "Implementing the latest frontend technologies to create fast, responsive applications",
      icon: <FaCode className="text-blue-400 text-3xl" />,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" // Coding close-up
    },
    {
      title: "Creative Problem Solving",
      description: "Unique approaches to complex UI challenges with elegant solutions",
      icon: <FaLightbulb className="text-purple-400 text-3xl" />,
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" // Lightbulb concept
    },
    {
      title: "Mobile-First Mindset",
      description: "Designing for all devices with progressive enhancement strategies",
      icon: <FaMobile className="text-pink-400 text-3xl" />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" // Mobile devices
    }
  ];

  const technologies = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
    { name: "React", icon: <SiReact className="text-blue-400 text-4xl" /> },
    { name: "Redux", icon: <TbBrandRedux  className="text-white text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> }
  ];

  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-2xl border-2 border-gray-700">
              <img 
                src={developerImage} 
                alt="Shashwat Pratap Singh" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl z-10 flex items-center justify-center text-white text-4xl font-bold">
              SPS
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/50 mb-6 text-blue-400 font-medium">
              Innovative Developer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Shashwat</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              A passionate frontend developer from Noida, India, specializing in creating exceptional digital experiences through innovative solutions and cutting-edge technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="/Projects">
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20">
                View Projects
              </button>
              </a>
              <a href="/ContactMe">
              <button className="flex items-center gap-3 px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                Contact Me <FaAngleRight className="transition-transform group-hover:translate-x-1" />
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">6+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">8+</div>
              <div className="text-gray-400">Months Experience</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">6+</div>
              <div className="text-gray-400">Technologies Used</div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Approach */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Innovation</span> Approach
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Combining creativity with technology to solve problems in unique ways
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovations.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  <div className="absolute top-6 left-6 p-3 bg-gray-900/80 rounded-lg backdrop-blur-sm">
                    {item.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Technologies</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The tools and frameworks I use to bring innovative ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-12 text-center border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bring Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Vision</span> to Life?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something truly innovative and impactful.
          </p>
          <a href="/ContactMe">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            Get In Touch <FaAngleRight className="inline ml-2" />
          </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default InnovationFull;
