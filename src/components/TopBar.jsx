import React, { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa";

function TopBar({ topBarMenuOptions, onOptionClick, selectedMenu }) {
  const options = Object.keys(topBarMenuOptions);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatMacTime = (date) => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = weekdays[date.getDay()];
    const month = months[date.getMonth()];
    const dateNum = date.getDate();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${day} ${month} ${dateNum} ${hours}:${minutes}${ampm}`;
  };

  return (
    <div className="text-white flex items-center text-sm gap-4 bg-[#00000038] backdrop-blur-xl px-2 font-medium fixed top-0 w-full z-50 select-none">
      <FaApple className="text-lg cursor-pointer" />
      <ul className="flex items-center list-none">
        {options.map((option, index) => (
          <li
            key={index}
            className={`mx-1 cursor-pointer p-2 rounded ${
              selectedMenu === option ? "bg-white/20" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOptionClick(e, option);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
      <div className="ml-auto mr-4">{formatMacTime(date)}</div>
    </div>
  );
}

export default TopBar;
