import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const fileStructure = {
  name: "Macintosh HD",
  type: "folder",
  children: [
    {
      name: "Desktop",
      type: "folder",
      children: [
        { name: "MyProject", type: "folder", children: [] },
        { name: "Notes.txt", type: "file" },
      ],
    },
    {
      name: "Downloads",
      type: "folder",
      children: [
        { name: "Resume.pdf", type: "file" },
        { name: "Installer.dmg", type: "file" },
      ],
    },
    {
      name: "Documents",
      type: "folder",
      children: [],
    },
  ],
};

function Finder() {
  const [currentFolder, setCurrentFolder] = useState(fileStructure);
  const [path, setPath] = useState([fileStructure]);

  const handleFolderClick = (folder) => {
    setPath([...path, folder]);
    setCurrentFolder(folder);
  };

  const goBack = () => {
    if (path.length > 1) {
      const newPath = [...path];
      newPath.pop();
      setPath(newPath);
      setCurrentFolder(newPath[newPath.length - 1]);
    }
  };

  return (
    <div className="p-3 text-white flex h-[300px]">
      <div className="w-1/4 border-r border-zinc-700 pr-2">
        <h2 className="font-bold mb-2 text-sm">Favorites</h2>
        {fileStructure.children.map((item, i) =>
          item.type === "folder" ? (
            <div
              key={i}
              onClick={() => {
                setPath([fileStructure, item]);
                setCurrentFolder(item);
              }}
              className="cursor-pointer py-1 px-2 hover:bg-zinc-700 rounded text-sm"
            >
              {item.name}
            </div>
          ) : null
        )}
      </div>

      <div className="w-3/4 pl-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={goBack}
              className="text-white bg-zinc-700 px-2 py-1 rounded hover:bg-zinc-600"
            >
              <FaArrowLeft className="inline mr-1" />
            </button>
            <span className="text-sm opacity-70">
              {path.map((p) => p.name).join(" / ")}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {currentFolder.children?.map((item, i) => (
            <div
              key={i}
              onClick={() => item.type === "folder" && handleFolderClick(item)}
              className="cursor-pointer hover:bg-zinc-700 p-3 rounded text-center"
            >
              <div className="text-4xl">
                {item.type === "folder" ? "📁" : "📄"}
              </div>
              <div className="mt-1 text-sm">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Finder;
