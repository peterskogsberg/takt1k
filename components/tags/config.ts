import type { Script, Stylesheet } from "./types";

const scripts: Readonly<Script[]> = [
  {
    src: "https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb.min.js",
  },
] as const;

const stylesheets: Readonly<Stylesheet[]> = [
  {
    src: "https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb.min.css",
  },
] as const;

export { scripts, stylesheets };
