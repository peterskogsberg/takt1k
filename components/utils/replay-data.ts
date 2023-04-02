import { recordingConfig } from "@components/recorder/config";
import { eventWithTimeAndPacker } from "rrweb/typings/packer/base";
import { rrweb } from "./recording";
import { noop } from "./dummy";

type RREvent = string | eventWithTimeAndPacker;
type RREvents = RREvent[];
type RRstopper = () => void | null;

const REPLAY_ID = "replayer";
const ev: RREvents = [];
let stopperFn: RRstopper = noop;

const playFn = (
  events: RREvents | undefined = ev,
  root: HTMLElement | undefined = document.getElementById(REPLAY_ID)
) => {
  console.log("playFn");
  console.log({ events });
  // Play
  if (events.length < 2) {
    console.debug("Replayer must have at least 2 events to play");
    return;
  }

  // Clear
  root.replaceChildren();

  const replayer = new rrweb.Replayer(events, {
    root,
    UNSAFE_replayCanvas: true,
  });
  replayer.play();
};

const emitFn = (e: eventWithTimeAndPacker) => {
  ev.push(e);
  console.log(e);
  console.log(ev.length);
};

const recordFn = () => {
  console.log("recording");
  stopperFn = rrweb.record({
    emit: emitFn,
    ...recordingConfig,
  });
};

const stopFn = () => {
  console.log("stop rec", ev);
  if (typeof stopperFn === "function") {
    stopperFn();
  }
};

export { playFn, recordFn, ev, stopFn };
