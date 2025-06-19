import React from "react";
import { FaApple } from "react-icons/fa";

function BootScreen({ bootedPercent }) {
  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center flex-col text-white z-[9999] transition-opacity duration-700"
      style={{
        opacity: bootedPercent < 100 ? 1 : 0,
        pointerEvents: bootedPercent < 100 ? "auto" : "none",
      }}
    >
      <FaApple className="text-8xl mb-4 animate-pulse" />
      <div className="w-32 h-1 bg-white/20 rounded overflow-hidden mt-4">
        <div
          className="h-full bg-white transition-all duration-500"
          style={{ width: `${bootedPercent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default BootScreen;
