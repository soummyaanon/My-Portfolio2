'use client';

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaSquareGithub, FaSquareXTwitter, FaLinkedin, FaBlogger } from "react-icons/fa6";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const IconSocials = [
    { name: 'Github', icon: FaSquareGithub, href: 'https://github.com/soummyaanon' },
    { name: 'Twitter', icon: FaSquareXTwitter, href: 'https://x.com/Thesourya2000' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/soumyapanda12/' },
    { name: 'Blogr', icon: FaBlogger, href: 'https://soumyapblog.blogspot.com' }
  ];

  const navItems = [
    { href: "#about-me", label: "About me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" }
  ];

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full h-auto md:h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10 transition-all duration-300">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between m-auto px-[10px]">
        <div className="w-full md:w-auto flex justify-between items-center py-4 md:py-0">
          <Link href="#about-me" className="h-auto w-auto flex flex-row items-center">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold ml-[10px] bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              BEROJGAR DEV
            </span>
          </Link>
          {isMobile && (
            <button 
              onClick={toggleMenu} 
              className="text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
        
        <div className={`${isMobile ? (isOpen ? 'max-h-96' : 'max-h-0') : 'max-h-full'} overflow-hidden transition-all duration-300 ease-in-out w-full md:w-auto md:flex md:items-center`}>
          <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-between md:mr-20 mb-4 md:mb-0">
            <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`cursor-pointer py-2 md:py-0 px-3 rounded-md transition-colors duration-300 ${activeSection === item.href.slice(1) ? 'bg-[#7042f830] text-white' : 'hover:bg-[#7042f830]'}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-center md:justify-start">
            {IconSocials.map((social) => {
              const Icon = social.icon;
              return (
                <Link 
                  href={social.href} 
                  key={social.name} 
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.name}`}
                >
                  <Icon size={29} className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;