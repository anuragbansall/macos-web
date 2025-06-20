import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Dock from "./components/Dock";
import ContextMenu from "./components/ContextMenu";
import BootScreen from "./components/BootScreen";

import FinderIcon from "./assets/icons/Finder.webp";
import WallpapersIcon from "./assets/icons/Wallpapers.webp";
import CalculatorIcon from "./assets/icons/Calculator.webp";
import CalendarIcon from "./assets/icons/Calender.webp";
import SafariIcon from "./assets/icons/Safari.webp";
import MusicIcon from "./assets/icons/Music.webp";
import PodcastsIcon from "./assets/icons/Podcasts.webp";
import DeveloperIcon from "./assets/icons/Github.webp";
import AppWindow from "./components/AppWindow";

const contextMenuOptions = [
  "New Folder",
  "Get Info",
  "Change Desktop Background",
  "Use Stacks",
  "Sort By",
  "Clean Up",
  "Clean Up By",
  "Show View Options",
];

const topBarMenuOptions = {
  Finder: ["About Finder", "Preferences", "Empty Trash"],
  File: ["New Folder", "New Window", "Close Window"],
  Edit: ["Undo", "Redo", "Cut", "Copy", "Paste"],
  View: ["As Icons", "As List", "Use Stacks", "Sort By", "Show View Options"],
  Go: ["Back", "Forward", "Recent Folders", "Computer", "Home"],
  Window: ["Minimize", "Zoom", "Move Window", "Bring All to Front"],
  Help: ["macOS Help", "Search"],
};

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

function App() {
  const [booted, setBooted] = useState(false);
  const [bootedPercent, setBootedPercent] = useState(0);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [topMenu, setTopMenu] = useState(null);
  const [openedApps, setOpenedApps] = useState([]);
  const [topZIndex, setTopZIndex] = useState(1000);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setShowContextMenu(true);
    setContextMenuPos({ x: e.clientX, y: e.clientY });
    setTopMenu(null);
  };

  const handleTopMenuClick = (e, label) => {
    e.preventDefault();
    const rect = e.target.getBoundingClientRect();
    setTopMenu({
      label,
      position: { x: rect.left, y: rect.bottom + 5 },
    });
    setShowContextMenu(false);
    setContextMenuPos({ x: 0, y: 0 });
  };

  const handleCloseMenus = (e) => {
    e.preventDefault();
    setShowContextMenu(false);
    setTopMenu(null);
  };

  const handleAppClick = (appName) => {
    const app = apps.find((a) => a.name === appName);
    if (!app) return;
    if (!openedApps.some((a) => a.name === appName)) {
      setOpenedApps((prev) => [
        ...prev,
        {
          name: app.name,
          icon: app.icon,
          position: {
            x: Math.random() * (window.innerWidth - 450),
            y: Math.random() * (window.innerHeight - 300),
          },
        },
      ]);
    }
  };

  const bringToFront = (appName) => {
    setOpenedApps((prev) =>
      prev.map((app) =>
        app.name === appName ? { ...app, zIndex: topZIndex + 1 } : app
      )
    );
    setTopZIndex((z) => z + 1);
  };

  const handleAppDrag = (appName, x, y) => {
    setOpenedApps((prev) =>
      prev.map((app) =>
        app.name === appName ? { ...app, position: { x, y } } : app
      )
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setBootedPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setBooted(true), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-[url('../public/wallpapers/wallpaper.jpg')] bg-cover bg-center select-none"
      onContextMenu={handleContextMenu}
      onClick={handleCloseMenus}
    >
      {!booted && <BootScreen bootedPercent={bootedPercent} />}

      <TopBar
        topBarMenuOptions={topBarMenuOptions}
        onOptionClick={handleTopMenuClick}
        selectedMenu={topMenu ? topMenu.label : null}
      />

      {openedApps.map((app) => (
        <AppWindow
          key={app.name}
          title={app.name}
          icon={app.icon}
          position={app.position}
          zIndex={app.zIndex}
          onClick={() => bringToFront(app.name)}
          onClose={() =>
            setOpenedApps((prev) => prev.filter((a) => a.name !== app.name))
          }
          onDragEnd={(x, y) => handleAppDrag(app.name, x, y)}
        >
          <div className="text-center text-white min-h-[300px] flex items-center justify-center flex-col gap-4 text-2xl font-semibold">
            <img src={app.icon} alt={app.name} className="w-12 h-12" />
            <h1>Welcome to {app.name}!</h1>
          </div>
        </AppWindow>
      ))}

      <div className="absolute z-999 bottom-0 left-0 w-full p-2">
        <Dock
          apps={apps}
          handleAppClick={handleAppClick}
          openedApps={openedApps}
        />
      </div>

      {showContextMenu && (
        <ContextMenu
          options={contextMenuOptions}
          position={contextMenuPos}
          onClose={() => setShowContextMenu(false)}
        />
      )}

      {topMenu && (
        <ContextMenu
          options={topBarMenuOptions[topMenu.label]}
          position={topMenu.position}
          onClose={() => setTopMenu(null)}
        />
      )}
    </div>
  );
}

export default App;
