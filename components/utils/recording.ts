import * as rrwebLibrary from "rrweb/es/rrweb/packages/rrweb/src/entries/all.js";
type RRweb = typeof import("rrweb/typings"); // Broken types from lib

const rrweb: RRweb = rrwebLibrary;

export { rrweb };
