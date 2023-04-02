import { eventWithTimeAndPacker } from "rrweb/typings/packer/base";
import { recordOptions } from "rrweb/typings/types";

const INITIAL_COLOR = "#cdcdcd" as const;

const WIDTH = 800 as const;
const HEIGHT = 400 as const;

const CANVAS_SIZE = {
  WIDTH,
  HEIGHT,
};

const BLOCK_CLASS = "do-not-record";

const recordingConfig: recordOptions<eventWithTimeAndPacker> = {
  recordCanvas: true,
  collectFonts: true,
  sampling: {
    canvas: 10,
  },
  blockClass: BLOCK_CLASS,
} as const;

export { INITIAL_COLOR, CANVAS_SIZE, BLOCK_CLASS, recordingConfig };
