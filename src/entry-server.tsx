import { renderToString } from "react-dom/server";
import App from "./App";
import ResumePage from "./components/ResumePage";

export function render() {
  return renderToString(<App />);
}

export function renderResume() {
  return renderToString(<ResumePage />);
}
