import React from "react";
import { FaTimes } from "react-icons/fa";
import { LuMaximize2 } from "react-icons/lu";
import { VscChromeMinimize } from "react-icons/vsc";
import { motion } from "framer-motion";

function AppWindow({
  title,
  icon,
  onClose,
  children,
  position,
  zIndex,
  onClick,
  onDragEnd = () => {},
}) {
  return (
    <motion.div
      className="fixed bg-[#1e1e1e] thin-border rounded-xl text-white shadow-xl shadow-[#00000064] z-[998] w-[450px] overflow-hidden"
      onClick={onClick}
      onDrag={onClick}
      style={{ top: position.y, left: position.x, zIndex }}
      drag
      onDragEnd={(e, { point }) => {
        onDragEnd(point.x, point.y);
      }}
      dragConstraints={{
        top: 0,
        left: 0,
        right: window.innerWidth - 450,
        bottom: window.innerHeight - 300,
      }}
      dragElastic={1}
    >
      <div className="p-2 flex items-center gap-2 group w-fit">
        {[
          {
            name: "Close",
            icon: <FaTimes />,
            action: onClose,
            bgColor: "#FF5F56",
          },
          {
            name: "Minimize",
            icon: <VscChromeMinimize />,
            action: onClose,
            bgColor: "#FFBD2E",
          },
          {
            name: "Maximize",
            icon: <LuMaximize2 />,
            action: onClose,
            bgColor: "#27C93F",
          },
        ].map((btn, index) => (
          <span
            className={`p-1 rounded-full h-4 w-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
            style={{ backgroundColor: btn.bgColor }}
            key={index}
          >
            <span
              className="text-black text-[10px] hidden group-hover:block"
              onClick={btn.action}
            >
              {btn.icon}
            </span>
          </span>
        ))}
      </div>

      <div>{children}</div>
    </motion.div>
  );
}

export default AppWindow;
