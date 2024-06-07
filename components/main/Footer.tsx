import React from "react";
import { FaGithub, FaDiscord, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]" style={{ position: 'relative', zIndex: 9999 }}>
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <a href="https://github.com/soummyaanon" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer" title="GitHub">
                        <FaGithub /><span className="ml-2">@soummyaanon</span>
                    </a>
                    <a href="https://www.discord.com/soumyapanda2000" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer" title="Discord">
                        <FaDiscord /><span className="ml-2">soumyapanda2000</span>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a href="https://instagram.com/anonymous__warior" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer" title="Instagram">
                        <FaInstagram /><span className="ml-2">@anonymous__warior</span>
                    </a>
                    <a href="https://twitter.com/Thesourya2000" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer" title="Twitter">
                        <FaTwitter /><span className="ml-2">@Thesourya2000</span>
                    </a>
                    <a href="https://www.linkedin.com/in/soumypanda" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer" title="LinkedIn">
                        <FaLinkedin /><span className="ml-2">@soumyapanda12</span>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <a href="mailto:soumyaranjanpanda910@gmail.com" target="_blank" rel="noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">soumyaranjanpanda910@gmail.com</span>    
                    </a>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; @soumyaanon {new Date().getFullYear()} Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer