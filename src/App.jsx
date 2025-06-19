import React from "react";
import TopBar from "./components/TopBar";
import Dock from "./components/Dock";

function App() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[url('../public/wallpapers/wallpaper.jpg')] bg-cover bg-center select-none">
      <TopBar />

      <div className="absolute bottom-0 left-0 w-full p-2">
        <Dock />
      </div>
    </div>
  );
}

export default App;
