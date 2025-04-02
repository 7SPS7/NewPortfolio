import React from 'react';
import { FaAngleRight } from "react-icons/fa6";

const Explore = () => {
  const processSteps = [
    {
      id: 1,
      title: "Step-by-Step Development Process",
      description: "I start with understanding your requirements and goals through detailed discovery sessions to create a tailored solution.",
      imageUrl: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Collaboration and Feedback",
      description: "Your input is crucial throughout the development with regular check-ins and prototype reviews for continuous improvement.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Final Review and Launch",
      description: "We ensure everything is perfect through rigorous testing and optimization before the final deployment.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div className='py-20 px-6 md:px-20 bg-gray-900 text-gray-100'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='md:flex justify-between items-end mb-16'>
          <div className='md:w-1/2 mb-10 md:mb-0'>
            <h3 className='text-xl font-bold mb-5 text-blue-400'>EXPLORE MY PROCESS</h3>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
              Discover How I Create <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>Exceptional Experiences</span>
            </h1>
          </div>
          <div className='md:w-1/2'>
            <p className='text-lg text-gray-300'>
              My approach to frontend development is user-centric and detail-oriented. I focus on creating seamless, interactive experiences that engage users while implementing the latest technologies and industry best practices.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
          {processSteps.map((step) => (
            <div 
              key={step.id} 
              className="group relative overflow-hidden bg-gray-800 rounded-xl border border-gray-700 hover:border-transparent transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={step.imageUrl} 
                  alt={step.title}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <div className={`w-12 h-1.5 mb-4 bg-gradient-to-r ${step.color}`}></div>
                <h2 className='text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors'>
                  {step.title}
                </h2>
                <p className='text-gray-400'>
                  {step.description}
                </p>
              </div>
              
              <div className="px-8 pb-8">
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="mr-2">0{step.id}</span>
                  <div className={`w-8 h-0.5 bg-gradient-to-r ${step.color} transition-all duration-300 group-hover:w-12`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='flex flex-wrap gap-6 mt-20'>
          <a href="/ExploreProcess">
          <button className='px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20'>
            Learn More About My Process
          </button>
          </a>
          <a href="/ContactMe">
          <button className='flex items-center gap-3 px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20'>
            Contact Me <FaAngleRight className='transition-transform group-hover:translate-x-1' />
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Explore;