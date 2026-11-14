import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "../.prerender/App.js";

const root = resolve(import.meta.dirname, "..");
try {
  const page = resolve(root, "dist/index.html");
  const html = await readFile(page, "utf8");
  const mount = '<div id="root"></div>';

  if (!html.includes(mount)) {
    throw new Error("The React mount point was not found in dist/index.html");
  }

  await writeFile(
    page,
    html.replace(
      mount,
      `<div id="root">${renderToString(createElement(App))}</div>`,
    ),
  );
} finally {
  await rm(resolve(root, ".prerender"), { recursive: true, force: true });
}
