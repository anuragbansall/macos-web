import React from "react";

function Upcoming({ app }) {
  return (
    <div className="text-center text-white min-h-[300px] flex items-center justify-center flex-col gap-4 text-2xl font-semibold">
      <img src={app.icon} alt={app.name} className="w-12 h-12" />
      <h1>{app.name} is coming soon!</h1>
    </div>
  );
}

export default Upcoming;
