import CanvasDraw from "react-canvas-draw";
const CANVAS_PREFIX = "canvas-";

const saveCanvas = (ref: React.MutableRefObject<CanvasDraw>): void => {
  localStorage.setItem(CANVAS_PREFIX, extractDataFromCanvas(ref));
};

const loadCanvas = (): string | null => localStorage.getItem(CANVAS_PREFIX);

const extractDataFromCanvas = (
  ref: React.MutableRefObject<CanvasDraw>
): string => ref.current.getSaveData();

const loadDataToCanvas = (ref: React.MutableRefObject<CanvasDraw>): void => {
  const data = loadCanvas();
  if (data) {
    ref.current.loadSaveData(data);
  }
};

export { saveCanvas, extractDataFromCanvas, loadDataToCanvas };
