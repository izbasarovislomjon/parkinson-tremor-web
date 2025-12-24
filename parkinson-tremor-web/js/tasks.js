// tasks.js
// Motor task execution and data collection

export let collectedPoints = [];
let active = false;

/**
 * Start a motor tremor task
 */
export function startTask() {
  collectedPoints = [];
  active = true;
}

/**
 * Stop the task
 */
export function stopTask() {
  active = false;
}

/**
 * Collect landmark data during the task
 * @param {Object} landmark - MediaPipe hand landmark
 */
export function collectPoint(landmark) {
  if (!active) return;

  // We track Y-axis oscillation (tremor)
  collectedPoints.push(landmark.y);
}

