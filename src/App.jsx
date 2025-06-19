import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Dock from "./components/Dock";
import ContextMenu from "./components/ContextMenu";
import BootScreen from "./components/BootScreen";

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

function App() {
  const [booted, setBooted] = useState(false);
  const [bootedPercent, setBootedPercent] = useState(0);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [topMenu, setTopMenu] = useState(null);

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

      <div className="absolute bottom-0 left-0 w-full p-2">
        <Dock />
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
