import React from "react";
import { FaGithub, FaDiscord, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

type Item = {
  href: string;
  icon: React.ReactNode;
  text: string;
  title: string;
};

type FooterSectionProps = {
  title: string;
  items: Item[];
};

const FooterSection = ({ title, items }: FooterSectionProps) => (
  <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
    <h3 className="font-bold text-xl mb-4">{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mb-3">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-400 transition-colors duration-300"
            title={item.title}
          >
            {item.icon}
            <span className="ml-2 font-semibold">{item.text}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Community",
      items: [
        { href: "https://github.com/soummyaanon", icon: <FaGithub size={20} />, text: "@soummyaanon", title: "GitHub" },
        { href: "https://www.discord.com/soumyapanda2000", icon: <FaDiscord size={20} />, text: "soumyapanda2000", title: "Discord" },
      ],
    },
    {
      title: "Social Media",
      items: [
        { href: "https://instagram.com/anonymous__warior", icon: <FaInstagram size={20} />, text: "@anonymous__warior", title: "Instagram" },
        { href: "https://twitter.com/Thesourya2000", icon: <FaSquareXTwitter size={20} />, text: "@Thesourya2000", title: "Twitter" },
        { href: "https://www.linkedin.com/in/soumypanda", icon: <FaLinkedin size={20} />, text: "@soumyapanda12", title: "LinkedIn" },
      ],
    },
    {
      title: "Contact Me",
      items: [
        { href: "mailto:soumyaranjanpanda910@gmail.com", icon: <FaEnvelope size={20} />, text: "soumyaranjanpanda910@gmail.com", title: "Email" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-8 relative z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between mb-8">
          {sections.map((section, index) => (
            <FooterSection key={index} title={section.title} items={section.items} />
          ))}
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm font-semibold">
            &copy; @soumyaanon {currentYear} Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;