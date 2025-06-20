import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WallpaperContextProvider from "./context/WallpaperContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WallpaperContextProvider>
      <App />
    </WallpaperContextProvider>
  </StrictMode>
);
