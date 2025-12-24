import { Hands } from "https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js";

export async function startCamera(onFrame) {
  const video = document.getElementById("video");
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;

  const hands = new Hands({
    locateFile: file =>
      `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
  });

  hands.setOptions({
    maxNumHands: 1,
    minDetectionConfidence: 0.6,
    minTrackingConfidence: 0.7
  });

  hands.onResults(onFrame);

  async function loop() {
    await hands.send({ image: video });
    requestAnimationFrame(loop);
  }
  loop();
}

