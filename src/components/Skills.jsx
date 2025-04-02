import React from 'react'
import cube from '../assets/Vector.png'
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'lucide-react';

const Skills = () => {
  return (
    <div className='py-20 px-6 md:px-20 bg-gray-900 text-gray-100'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='md:flex justify-between items-end mb-16'>
          <div className='md:w-1/2 mb-10 md:mb-0'>
            <h3 className='text-xl font-bold mb-5 text-blue-400'>SKILLS</h3>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
              Core <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>Frontend Development</span> Skills
            </h1>
          </div>
          <div className='md:w-1/2'>
            <p className='text-lg text-gray-300 md:text-right'>
              As a frontend developer, I specialize in creating interactive and visually appealing web applications. 
              My expertise in modern frameworks allows me to build responsive designs that enhance user experience.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
          {/* HTML Card */}
          <div className='group relative p-8 bg-gray-800 rounded-xl hover:bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2'>
            <div className='w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6'>
              <img src={cube} alt="cube icon" className='w-8 h-8' />
            </div>
            <h2 className='text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors'>
              HTML: The Foundation
            </h2>
            <p className='text-gray-400 mb-6'>
              HTML forms the backbone of any web page, providing structure and semantic meaning to content.
            </p>
            <div className='absolute bottom-6 left-8 w-8 h-0.5 bg-blue-400 group-hover:w-16 transition-all'></div>
          </div>

          {/* CSS Card */}
          <div className='group relative p-8 bg-gray-800 rounded-xl hover:bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2'>
            <div className='w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6'>
              <img src={cube} alt="cube icon" className='w-8 h-8' />
            </div>
            <h2 className='text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors'>
              CSS: Styling Mastery
            </h2>
            <p className='text-gray-400 mb-6'>
              CSS enhances the visual appeal with animations, layouts, and responsive design techniques.
            </p>
            <div className='absolute bottom-6 left-8 w-8 h-0.5 bg-purple-400 group-hover:w-16 transition-all'></div>
          </div>

          {/* JavaScript Card */}
          <div className='group relative p-8 bg-gray-800 rounded-xl hover:bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-pink-400 transition-all duration-300 hover:-translate-y-2'>
            <div className='w-14 h-14 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6'>
              <img src={cube} alt="cube icon" className='w-8 h-8' />
            </div>
            <h2 className='text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors'>
              JavaScript: Dynamic Power
            </h2>
            <p className='text-gray-400 mb-6'>
              JavaScript brings interactivity, dynamic content, and complex functionality to web applications.
            </p>
            <div className='absolute bottom-6 left-8 w-8 h-0.5 bg-pink-400 group-hover:w-16 transition-all'></div>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex flex-wrap gap-5 mt-20'>
          <a href="/ContactMe">
          <button className='px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20'>
            Contact Me
          </button>
          </a>
          <a
          href="/ExploreSkills"
          >
          <button className='flex items-center gap-3 px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20'>
            Explore Skills <FaAngleRight className='transition-transform group-hover:translate-x-1' />
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Skills