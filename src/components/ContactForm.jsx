import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
  // Abstract tech background from Unsplash
  const bgImageUrl = "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80";

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className='lg:w-1/2 space-y-6 md:space-y-8'>
            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/50">
              <span className="text-blue-400 font-medium">Let's Connect</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-4">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              I'm here to help you with your frontend development needs. Let's collaborate!
            </p>

            <div className="space-y-4 md:space-y-6 mt-6">
              <div className='flex items-center gap-4'>
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-400/50 flex-shrink-0">
                  <MdOutlineMailOutline className="text-blue-400 text-xl md:text-2xl" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm md:text-base">Email</p>
                  <a 
                    href="mailto:Shashwatpratap100@gmail.com" 
                    className="text-white hover:text-blue-400 transition-colors text-base md:text-lg"
                  >
                    Shashwatpratap100@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-400/50 flex-shrink-0">
                  <FaPhoneAlt className="text-blue-400 text-lg md:text-xl" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm md:text-base">Phone</p>
                  <a 
                    href="tel:+919717794707" 
                    className="text-white hover:text-blue-400 transition-colors text-base md:text-lg"
                  >
                    +91 97177 94707
                  </a>
                </div>
              </div>
            </div>

            <div className='flex gap-3 md:gap-4 mt-6'>
            {[
  { 
    icon: FaGithubSquare, 
    color: "hover:text-purple-400", 
    label: "GitHub",
    link: "https://github.com/7SPS7" 
  },
  { 
    icon: FaXTwitter, 
    color: "hover:text-blue-300", 
    label: "Twitter",
    link: "https://twitter.com/Shashwa9963495" 
  },
  { 
    icon: FaWhatsapp, 
    color: "hover:text-green-400", 
    label: "WhatsApp",
    link: "https://wa.me/919717794707" 
  },
  { 
    icon: FaLinkedin, 
    color: "hover:text-blue-400", 
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/shashwat-pratap-singh-ba6574254/" 
  }
].map((social, index) => {
  const Icon = social.icon;
  return (
    <a 
      key={index} 
      href={social.link} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={social.label}
      className={`text-2xl md:text-3xl text-gray-300 ${social.color} transition-all hover:-translate-y-0.5`}
    >
      <Icon />
    </a>
  );
})}
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:w-1/2 mt-8 lg:mt-0'>
            <form action="https://getform.io/f/awnqednb" method="POST"
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 md:space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-300 text-sm md:text-base">Your Name</label>
                <input 
                  id="name"
                  type="text" 
                  name='name'
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder='Enter your name'
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300 text-sm md:text-base">Your Email</label>
                <input 
                  id="email"
                  type="email" 
                  name='email'
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder='Enter your email'
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300 text-sm md:text-base">Your Message</label>
                <textarea 
                name='message'
                  id="message"
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder='Enter your message'
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;