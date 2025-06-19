import React from "react";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[url('../public/wallpapers/wallpaper.jpg')] bg-cover bg-center">
      <TopBar />
    </div>
  );
}

export default App;
