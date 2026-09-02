import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes"

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Elemento com id 'root' não encontrado");
}

createRoot(rootElement).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
