import { recordingConfig } from "@components/recorder/config";
import { eventWithTimeAndPacker } from "rrweb/typings/packer/base";
import { rrweb } from "./recording";

type RREvent = string | eventWithTimeAndPacker;
type RREvents = RREvent[];
type RRstopper = () => void | null;

const REPLAY_ID = "replayer";
const ev: RREvents = [];
let stopperFn: RRstopper = () => {};

const playFn = (
  events: RREvents | undefined = ev,
  root: HTMLElement | undefined = document.getElementById(REPLAY_ID)
) => {
  console.log("playFn");
  console.log({ events });

  // Clear
  root.replaceChildren();

  // Play
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
  const stopFn = rrweb.record({
    emit: emitFn,
    ...recordingConfig,
  });
  stopperFn = stopFn;
};

const stopFn = () => {
  console.log("stop rec", ev);
  if (typeof stopperFn === "function") {
    const retVal = stopperFn();
    console.log({ retVal });
  }
};

export { playFn, recordFn, ev, stopFn };

