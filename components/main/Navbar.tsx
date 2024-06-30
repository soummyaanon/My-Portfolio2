import React from "react";
import Image from "next/image";
import { FaSquareGithub, FaSquareXTwitter, FaLinkedin,FaBlogger } from "react-icons/fa6";

import Link from 'next/link';

const Navbar = () => {
  const IconSocials = [
    { name: 'Github', icon: FaSquareGithub, href: 'https://github.com/soummyaanon' },
    { name: 'Twitter', icon: FaSquareXTwitter, href: 'https://x.com/Thesourya2000' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/soumyapanda12/' },
    ({ name: 'Blogr', icon: FaBlogger, href: 'https://soumyapblog.blogspot.com' })
  ];

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />
            <span className="font-bold ml-[10px] hidden md:block text-purple-400">

              printf("Bejorgar-DEV!");
              
          </span>




        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer ">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
<div className="flex flex-row gap-2">
  {IconSocials.map((social) => {
    const Icon = social.icon;
    return (
      <Link href={social.href} key={social.name} passHref>
        <Icon size={29} className="cursor-pointer text-gray-300" />
      </Link>
    );
  })}
</div>
      </div>
    </div>
  );
};

export default Navbar;