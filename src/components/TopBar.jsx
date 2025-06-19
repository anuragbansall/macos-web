import React, { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";

function TopBar() {
  const options = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
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
    <div className="text-white flex items-center text-sm gap-4 bg-[#00000038] backdrop-blur-xl px-2 py-1 fixed top-0 w-full z-50">
      <FaApple className="text-lg" />

      <ul className="flex items-center list-none">
        {options.map((option, index) => (
          <li key={index} className="mx-2">
            {option}
          </li>
        ))}
      </ul>

      <div className="ml-auto">
        <span className="mr-4 ">{formatMacTime(date)}</span>
      </div>
    </div>
  );
}

export default TopBar;
