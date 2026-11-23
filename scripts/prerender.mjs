import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { App, ResumePage } from "../.prerender/entry-server.js";

const root = resolve(import.meta.dirname, "..");
try {
  for (const [path, Component] of [
    ["dist/index.html", App],
    ["dist/resume/index.html", ResumePage],
  ]) {
    const page = resolve(root, path);
    const html = await readFile(page, "utf8");
    const mount = '<div id="root"></div>';

    if (!html.includes(mount)) {
      throw new Error(`The React mount point was not found in ${path}`);
    }

    await writeFile(
      page,
      html.replace(
        mount,
        `<div id="root">${renderToString(createElement(Component))}</div>`,
      ),
    );
  }
} finally {
  await rm(resolve(root, ".prerender"), { recursive: true, force: true });
}
