import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import clientImage from '../assets/client-pic.jpg'

const Testimonial = () => {

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/50 mb-4">
            <span className="text-blue-400 font-medium">Client Feedback</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Client Says</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Client Image */}
          <div className="lg:w-1/3 relative">
            <div className="relative w-full h-110 rounded-2xl overflow-hidden border-4 border-white/10">
              <img 
                src={clientImage} 
                alt="Client" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-xl font-bold text-white">Jagriti Yadav</h3>
                <p className="text-blue-300">UX/UI Designer (Parsons New York | Ex-Deloitte India)</p>
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="lg:w-2/3">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative">
              <FaQuoteLeft className="text-purple-400 text-3xl absolute top-8 left-8 opacity-20" />
              <div className="pl-12">
                <p className="text-xl text-gray-300 mb-6">
                Shashwat transformed my design vision into a stunning, functional portfolio. His technical expertise in React and attention to UX details perfectly showcased my work from Deloitte and Parsons. The result helped me land interviews and freelance projects. He's not just a developer - he's a design-thinking collaborator who asks the right questions. Highly recommend!               </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <h4 className="text-white font-semibold">Jagriti Yadav</h4>
                      <p className="text-gray-400 text-sm">UX/UI Designer (Parsons New York | Ex-Deloitte India)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {[
                { metric: "40%", label: "User Retention Increase" },
                { metric: "3 Months", label: "Project Duration" },
                { metric: "100%", label: "Satisfaction" }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {item.metric}
                  </p>
                  <p className="text-gray-300 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;