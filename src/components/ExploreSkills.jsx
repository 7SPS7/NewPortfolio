import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiJest } from 'react-icons/si';

const ExploreSkills = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: <FaHtml5 className="text-orange-500 text-4xl" />,
      description: 'The foundational markup language for creating web pages and applications. I use semantic HTML5 to ensure accessibility and SEO optimization.',
      expertise: [
        'Semantic HTML structure',
        'Accessibility (ARIA)',
        'SEO best practices',
        'Form validation',
        'Canvas/WebGL integration'
      ]
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
      description: 'Styling language that brings designs to life. I leverage modern CSS features including Flexbox, Grid, and animations for responsive layouts.',
      expertise: [
        'Flexbox & Grid layouts',
        'CSS animations',
        'Responsive design',
        'CSS variables',
        'BEM methodology'
      ]
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="text-yellow-400 text-4xl" />,
      description: 'The programming language that powers interactive web experiences. I write clean, efficient JS code following modern ES6+ standards.',
      expertise: [
        'ES6+ features',
        'DOM manipulation',
        'Async programming',
        'Functional programming',
        'Error handling'
      ]
    },
    {
      name: 'React',
      icon: <FaReact className="text-blue-400 text-4xl" />,
      description: 'Popular JavaScript library for building component-based UIs. I develop reusable components with hooks and context API.',
      expertise: [
        'React hooks',
        'Context API',
        'Component lifecycle',
        'Performance optimization',
        'Custom hooks'
      ]
    },
  ];

  const tools = [
    {
      name: 'Git',
      icon: <FaGitAlt className="text-orange-600 text-3xl" />,
      description: 'Version control system for tracking code changes and collaboration.'
    },
    {
      name: 'npm/yarn',
      icon: <FaNpm className="text-red-500 text-3xl" />,
      description: 'Package managers for JavaScript dependency management.'
    },
    {
      name: 'Redux',
      icon: <SiRedux className="text-purple-500 text-3xl" />,
      description: 'Predictable state container for JavaScript apps.'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
      description: 'Utility-first CSS framework for rapid UI development.'
    },
    {
      name: 'Jest',
      icon: <SiJest className="text-red-700 text-3xl" />,
      description: 'JavaScript testing framework for reliable applications.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Frontend</span> Expertise
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive overview of my technical skills and the tools I use to build modern web applications
          </p>
        </div>

        {/* Core Skills */}
        <section className="mb-28">
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
            <span className="border-b-4 border-blue-500 pb-2">Core Technologies</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  {skill.icon}
                  <h3 className="text-2xl font-bold">{skill.name}</h3>
                </div>
                <p className="text-gray-400 mb-6">{skill.description}</p>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-400">Key Expertise:</h4>
                  <ul className="space-y-2">
                    {skill.expertise.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
            <span className="border-b-4 border-purple-500 pb-2">Development Tools</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex justify-center mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-28 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm passionate about creating exceptional user experiences with these technologies.
          </p>
          <a href="/ContactMe">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            Get In Touch
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExploreSkills;