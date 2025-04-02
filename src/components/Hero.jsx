import React from 'react';

const Hero = () => {
  // Modern abstract tech background from Unsplash
  const bgImageUrl = "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80";

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-8 mt-5 md:mt-0">
            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/50 mb-4 ">
              <span className="text-blue-400 font-medium ">Frontend Developer</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Experiences</span> That Matter
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl">
              Hi, I'm Shashwat Pratap Singh. I specialize in creating beautiful, functional interfaces that users love. Based in Noida, India.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="/Projects">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                Explore My Work
              </button>
              </a>
              <a href="/ContactMe">
              <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                Contact Me
              </button>
              </a>
            </div>
          </div>
          
          {/* Graphic element */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl mb-20">
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mockup-code bg-transparent text-blue-400">
                    <pre><code className="text-sm md:text-base">{`<Welcome />`}</code></pre>
                    <pre><code className="text-sm md:text-base">{`  <Portfolio>`}</code></pre>
                    <pre><code className="text-sm md:text-base">{`    <Projects />`}</code></pre>
                    <pre><code className="text-sm md:text-base">{`    <Skills />`}</code></pre>
                    <pre><code className="text-sm md:text-base">{`  </Portfolio>`}</code></pre>
                    <pre><code className="text-sm md:text-base">{`</Welcome>`}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;