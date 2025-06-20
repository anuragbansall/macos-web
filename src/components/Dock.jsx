import React from "react";

function Dock({ apps, handleAppClick, openedApps }) {
  return (
    <div className="w-fit mx-auto flex items-center justify-center blurred-bg p-1 rounded-2xl thin-border">
      {apps.map((app, index) => (
        <div
          key={index}
          className="relative cursor-pointer group flex flex-col items-center justify-center"
          onClick={() => handleAppClick(app.name)}
        >
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 blurred-bg text-white thin-border text-sm px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {app.name}
          </span>
          <img
            src={app.icon}
            alt={app.name}
            className="size-[4rem] hover:scale-110 transition-transform duration-200"
          />
          <div
            className={`h-1 w-1 bg-white rounded-full ${
              openedApps.some((a) => a.name === app.name)
                ? "opacity-100"
                : "opacity-0"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Dock;
