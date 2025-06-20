import { createContext, useState } from "react";

export const WallpaperContext = createContext();

const WallpaperContextProvider = ({ children }) => {
  const wallpapers = [
    {
      id: 1,
      url: "/wallpapers/river.jpg",
      name: "River",
    },
    {
      id: 2,
      url: "/wallpapers/colorful.jpg",
      name: "Colorful",
    },
    {
      id: 3,
      url: "/wallpapers/dark-mode.jpg",
      name: "Dark Mode",
    },
    {
      id: 4,
      url: "/wallpapers/daylight.jpg",
      name: "Daylight",
    },
    {
      id: 5,
      url: "/wallpapers/gradient.jpg",
      name: "Gradient",
    },
    {
      id: 6,
      url: "/wallpapers/infrared.jpg",
      name: "Infrared",
    },
    {
      id: 7,
      url: "/wallpapers/island.jpg",
      name: "Island",
    },
    {
      id: 8,
      url: "/wallpapers/mountains.jpg",
      name: "Mountains",
    },
    {
      id: 9,
      url: "/wallpapers/night-sky.jpg",
      name: "Night Sky",
    },
    {
      id: 10,
      url: "/wallpapers/seashore.jpg",
      name: "Seashore",
    },
    {
      id: 11,
      url: "/wallpapers/waves.jpg",
      name: "Waves",
    },
  ];

  const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapers[0]);

  return (
    <WallpaperContext.Provider
      value={{
        wallpapers,
        selectedWallpaper,
        setSelectedWallpaper,
      }}
    >
      {children}
    </WallpaperContext.Provider>
  );
};

export default WallpaperContextProvider;
