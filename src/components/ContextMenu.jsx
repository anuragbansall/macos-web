import React from "react";

function ContextMenu({ options = [], position = { x: 0, y: 0 }, onClose }) {
  return (
    <div
      style={{ top: position.y, left: position.x }}
      className="absolute z-50 blurred-bg border thin-border rounded-lg shadow-lg py-2 text-white min-w-[200px]"
      onClick={onClose}
    >
      {options.map((option, index) => (
        <div
          key={index}
          className="px-4 py-2 hover:bg-white/10 cursor-pointer text-sm border-b last:border-none border-white/10"
        >
          {option}
        </div>
      ))}
    </div>
  );
}

export default ContextMenu;
