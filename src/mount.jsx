import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

export function mount(Component) {
  const root = document.getElementById("root");
  const app = (
    <StrictMode>
      <Component />
    </StrictMode>
  );

  if (root.hasChildNodes()) {
    hydrateRoot(root, app);
  } else {
    createRoot(root).render(app);
  }
}
