import React from "react";
import { FaGithub, FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 relative z-50">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-lg">Community</div>
                    <a href="https://github.com/soummyaanon" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-4 cursor-pointer font-bold" title="GitHub">
                        <FaGithub /><span className="ml-2">@soummyaanon</span>
                    </a>
                    <a href="https://www.discord.com/soumyapanda2000" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-4 cursor-pointer font-bold" title="Discord">
                        <FaDiscord /><span className="ml-2">soumyapanda2000</span>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-lg">Social Media</div>
                    <a href="https://instagram.com/anonymous__warior" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-4 cursor-pointer font-bold" title="Instagram">
                        <FaInstagram /><span className="ml-2">@anonymous__warior</span>
                    </a>
                    <a href="https://twitter.com/Thesourya2000" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-4 cursor-pointer font-bold" title="Twitter">
                        <FaSquareXTwitter /><span className="ml-2">@Thesourya2000</span>
                    </a>
                    <a href="https://www.linkedin.com/in/soumypanda" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-4 cursor-pointer font-bold" title="LinkedIn">
                        <FaLinkedin /><span className="ml-2">@soumyapanda12</span>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-lg">Contact Me</div>
                    <a href="mailto:soumyaranjanpanda910@gmail.com" target="_blank" rel="noreferrer" className="flex flex-row items-center my-4 cursor-pointer font-bold">
                        <span className="text-lg ml-2">soumyaranjanpanda910@gmail.com</span>    
                    </a>
                </div>
            </div>

            <div className="mb-5 text-base text-center font-bold">
                &copy; @soumyaanon {new Date().getFullYear()} Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer