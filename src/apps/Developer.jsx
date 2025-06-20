import React from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import Profile from "../assets/profile.jpg";

function Developer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/anuragbansall",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anuragbansall",
      icon: <FaLinkedin />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/anuragbansall",
      icon: <FaCode />,
    },
  ];

  return (
    <div className="p-6 text-white h-[300px] w-full flex flex-col items-center justify-center gap-4">
      <div className="w-26 h-26 shrink-0 rounded-full bg-zinc-700 border-4 border-zinc-600 overflow-hidden">
        <img src={Profile} alt="Developer" className="w-full h-full object-cover" />
      </div>

      <h1 className="text-2xl font-semibold">Anurag Bansal</h1>
      <p className="text-zinc-400 text-sm text-center max-w-md">
        Full Stack Developer • Open Source Enthusiast • Building functional UIs
        & solving DSA problems.
      </p>

      <div className="flex gap-4 mt-4">
        {socialLinks.map((link) => (
          <a
            href={link.url}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg flex items-center gap-2 px-4 py-2 rounded bg-zinc-700 hover:bg-zinc-600 transition-all"
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Developer;
