import React from "react";
import FinderIcon from "../assets/icons/finder.png";
import WallpapersIcon from "../assets/icons/Wallpapers.webp";
import CalculatorIcon from "../assets/icons/Calculator.webp";
import CalendarIcon from "../assets/icons/Calender.webp";
import SafariIcon from "../assets/icons/Safari.webp";
import MusicIcon from "../assets/icons/Music.webp";
import PodcastsIcon from "../assets/icons/Podcasts.webp";
import DeveloperIcon from "../assets/icons/Github.webp";

const apps = [
  {
    name: "Finder",
    icon: FinderIcon,
  },
  {
    name: "Wallpapers",
    icon: WallpapersIcon,
  },
  {
    name: "Calculator",
    icon: CalculatorIcon,
  },
  {
    name: "Calendar",
    icon: CalendarIcon,
  },
  {
    name: "Safari",
    icon: SafariIcon,
  },
  {
    name: "Music",
    icon: MusicIcon,
  },
  {
    name: "Podcasts",
    icon: PodcastsIcon,
  },
  {
    name: "Developer",
    icon: DeveloperIcon,
  },
];

function Dock() {
  return (
    <div className="w-fit mx-auto flex items-center justify-center blurred-bg p-2 rounded-2xl thin-border">
      {apps.map((app, index) => (
        <div key={index} className="relative cursor-pointer group">
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 blurred-bg text-white thin-border text-sm px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {app.name}
          </span>
          <img
            src={app.icon}
            alt={app.name}
            className="size-[4rem] hover:scale-110 transition-transform duration-200"
          />
        </div>
      ))}
    </div>
  );
}

export default Dock;
