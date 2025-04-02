import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import developerImage from '../assets/profile-pic.jpg'; // Replace with your image

const Innovation = () => {
  return (
    <div className="py-20 px-6 md:px-20 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section */}
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

          {/* Content Section */}
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/50 mb-6 text-blue-400 font-medium">
              Innovative Developer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Shashwat</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Shashwat Pratap Singh is a skilled frontend developer with a passion for creating seamless user experiences. Based in Noida, India, he combines technical expertise with a keen eye for design to deliver exceptional digital products.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="/Innovation">
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20">
                Learn More
              </button>
              </a>
              <button className="flex items-center gap-3 px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                Contact <FaAngleRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;