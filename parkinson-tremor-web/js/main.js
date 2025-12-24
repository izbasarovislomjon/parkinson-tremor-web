// main.js
// Application controller

import { analyzeTremor } from "./analysis.js";
import { saveResult } from "./storage.js";
import { startTask, stopTask, collectPoint, collectedPoints } from "./tasks.js";

/**
 * Called when test starts
 */
export function beginTest() {
  startTask();
  console.log("Tremor test started");
}

/**
 * Called on each MediaPipe frame
 */
export function onHandResults(results) {
  if (results.multiHandLandmarks) {
    const fingerTip = results.multiHandLandmarks[0][8];
    collectPoint(fingerTip);
  }
}

/**
 * Called when test finishes
 */
export function endTest() {
  stopTask();

  const result = analyzeTremor(collectedPoints);
  saveResult(result);

  localStorage.setItem("lastResult", JSON.stringify(result));
  window.location.href = "results.html";
}

