import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt, FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <span className="text-4xl font-bold">
              <span className="text-blue-400">S</span>
              <span className="text-purple-500">P</span>
              <span className="text-pink-500">S</span>
            </span>
          </div>

          <div className="flex space-x-6">
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

        {/* Links sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Portfolio", "About", "Services", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {["Web Development", "UI/UX Design", "Mobile Apps", "Consulting", "Maintenance"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors">
                shashwatpratap100@gmail.com
              </li>
              <li className="hover:text-white transition-colors">
                +91 97177 94707
              </li>
              <li className="hover:text-white transition-colors">
                Noida, India
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {["Privacy Policy", "Terms", "Cookies"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Shashwat Pratap Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;