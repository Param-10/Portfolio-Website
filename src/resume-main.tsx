import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import ResumePage from "./components/ResumePage.tsx";
import "./index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Resume root element was not found.");
}

const page = (
  <StrictMode>
    <ResumePage />
  </StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, page);
} else {
  createRoot(container).render(page);
}
