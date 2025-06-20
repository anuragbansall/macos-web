import React, { useContext } from "react";
import { WallpaperContext } from "../context/WallpaperContextProvider";

function Wallpapers() {
  const { wallpapers, setSelectedWallpaper, selectedWallpaper } =
    useContext(WallpaperContext);

  const handleWallpaperClick = (wallpaper) => {
    setSelectedWallpaper(wallpaper);
  };

  return (
    <div className="h-[300px] overflow-auto w-full flex flex-col items-center gap-4 p-2">
      {wallpapers.map((wallpaper) => (
        <div
          key={wallpaper.id}
          className="w-full flex items-center justify-center flex-col cursor-pointer group"
          onClick={() => handleWallpaperClick(wallpaper)}
        >
          <div
            className={`w-full h-64 bg-zinc-800 rounded-md overflow-hidden border-2 group-hover:border-blue-500 transition-all duration-300 ${
              wallpaper.id === selectedWallpaper?.id
                ? "border-blue-500"
                : "border-transparent"
            }`}
          >
            <img
              src={wallpaper.url}
              alt={wallpaper.name}
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-white text-xl mt-2">{wallpaper.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Wallpapers;
