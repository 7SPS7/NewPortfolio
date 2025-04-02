import React from 'react';
import { FaAngleRight, FaSearch, FaUsers, FaCode, FaRocket } from 'react-icons/fa';

const ExploreProcess = () => {
  const processPhases = [
    {
      title: "Discovery Phase",
      icon: <FaSearch className="text-blue-400 text-3xl" />,
      description: "We begin by deeply understanding your vision through detailed consultations and market research.",
      steps: [
        "Initial client questionnaire",
        "Competitor analysis",
        "User persona development",
        "Technical assessment",
        "Project roadmap"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Design & Prototyping",
      icon: <FaUsers className="text-purple-400 text-3xl" />,
      description: "Creating interactive prototypes to visualize and refine the user experience before development.",
      steps: [
        "Wireframe creation",
        "UI/UX mockups",
        "Interactive prototypes",
        "Accessibility review",
        "Client feedback"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Development",
      icon: <FaCode className="text-pink-400 text-3xl" />,
      description: "Building your product with clean, maintainable code using modern frameworks and best practices.",
      steps: [
        "Component architecture",
        "Code reviews",
        "Continuous integration",
        "Performance tuning",
        "Cross-browser testing"
      ],
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Launch & Growth",
      icon: <FaRocket className="text-green-400 text-3xl" />,
      description: "Deploying your product and implementing strategies for long-term success and growth.",
      steps: [
        "Staging testing",
        "Performance benchmarks",
        "SEO optimization",
        "Analytics setup",
        "Maintenance planning"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Development Journey</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A transparent, step-by-step look at how I bring digital products to life
          </p>
        </div>

        {/* Process Cards - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          {processPhases.map((phase, index) => (
            <div 
              key={index}
              className="relative group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image with overlay */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={phase.image} 
                  alt={phase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
                <div className="absolute top-6 left-6 p-3 bg-gray-900/80 rounded-lg backdrop-blur-sm">
                  {phase.icon}
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                    Phase {index + 1}
                  </span>
                  <h2 className="text-2xl font-bold mt-2">{phase.title}</h2>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6">{phase.description}</p>
                <h3 className="font-semibold mb-4 text-blue-400">Key Activities:</h3>
                <ul className="space-y-2">
                  {phase.steps.map((step, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <span className="text-blue-400 mr-2">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Section - Horizontal Cards */}
        <section className="mb-28">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-4 border-purple-500 pb-2">My Development Principles</span>
          </h2>
          
          <div className="flex overflow-x-auto pb-6 -mx-6 px-6 scrollbar-hide">
            <div className="flex space-x-6 flex-col w-90% md:flex-row">
              <div className="w-[100%] md:w-[300px] h-[300px] bg-gray-800 p-8 rounded-xl border border-gray-700 mb-5">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                  <FaUsers className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">User-First Mindset</h3>
                <p className="text-gray-400">
                  Every decision starts with understanding user needs and behaviors through research and testing.
                </p>
              </div>
              
              <div className="w-[100%] md:w-[300px] h-[300px] bg-gray-800 p-8 rounded-xl border border-gray-700 mb-5">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6">
                  <FaCode className="text-purple-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Clean Code</h3>
                <p className="text-gray-400">
                  Writing maintainable, well-documented code with proper architecture and testing.
                </p>
              </div>
              
              <div className="w-[100%] md:w-[300px] h-[300px] bg-gray-800 p-8 rounded-xl border border-gray-700 mb-5">
                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-6">
                  <FaRocket className="text-pink-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-pink-400">Performance Focus</h3>
                <p className="text-gray-400">
                  Optimizing for speed and efficiency at every level, from code to assets to APIs.
                </p>
              </div>
              
              <div className="w-[100%] md:w-[300px] h-[300px] bg-gray-800 p-8 rounded-xl border border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-6">
                  <FaSearch className="text-green-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-400">Continuous Learning</h3>
                <p className="text-gray-400">
                  Staying updated with the latest technologies and industry best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Project?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can apply this process to create something amazing together.
          </p>
          <a href="/ContactMe">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            Start Your Project <FaAngleRight className="inline ml-2" />
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExploreProcess;