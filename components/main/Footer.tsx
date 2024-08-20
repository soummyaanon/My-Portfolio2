import React from "react";
import { FaGithub, FaDiscord, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


type SocialItem = {
  href: string;
  icon: React.ReactNode;
  title: string;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialItems: SocialItem[] = [
    { href: "https://github.com/soummyaanon", icon: <FaGithub size={24} />, title: "GitHub" },
    { href: "https://www.discord.com/soumyapanda2000", icon: <FaDiscord size={24} />, title: "Discord" },
    { href: "https://instagram.com/anonymous__warior", icon: <FaInstagram size={24} />, title: "Instagram" },
    { href: "https://twitter.com/Thesourya2000", icon: <FaSquareXTwitter size={24} />, title: "Twitter" },
    { href: "https://www.linkedin.com/in/soumypanda", icon: <FaLinkedin size={24} />, title: "LinkedIn" },
    { href: "mailto:soumyaranjanpanda910@gmail.com", icon: <FaEnvelope size={24} />, title: "Email" },
  ];

  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-8 relative z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-6 mb-6">
            {socialItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                title={item.title}
              >
                {item.icon}
              </a>
            ))}
          </div>
         
          <p className="text-sm font-semibold mt-4 text-center">
            &copy; {currentYear} @soumyaanon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;