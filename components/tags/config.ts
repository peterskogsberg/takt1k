import type { Script, Stylesheet } from "./types";

// const scripts: Readonly<Script[]> = [
//   {
//     src: "https://cdn.jsdelivr.net/npm/rrweb@2.0.0-alpha.4/dist/rrweb.min.js",
//     sha256: "hqAGp3qvRGRVAfS7bCeBPQldut3BjsEAh+CJl+zKiFQ=",
//   },
// ] as const;
const scripts: Readonly<Script[]> = [] as const;

// const stylesheets: Readonly<Stylesheet[]> = [
//   {
//     src: "https://cdn.jsdelivr.net/npm/rrweb@2.0.0-alpha.4/dist/rrweb.min.css",
//     sha256: "pdHM+gyqFNuIddFNgmqPVPON4eI4NSaskhUrLr39clw=",
//   },
// ] as const;

const stylesheets: Readonly<Stylesheet[]> = [] as const;

export { scripts, stylesheets };
