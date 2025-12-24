export function analyzeTremor(points) {
  const mean = points.reduce((a,b)=>a+b) / points.length;
  const variance = points.reduce((a,b)=>a+(b-mean)**2,0)/points.length;

  let severity = 0;
  if (variance > 0.0005) severity = 1;
  if (variance > 0.001) severity = 2;
  if (variance > 0.002) severity = 3;

  return {
    std_amplitude: variance,
    severity,
    interpretation:
      severity === 0 ? "Normal" :
      severity === 1 ? "Mild tremor" :
      severity === 2 ? "Moderate tremor" :
      "Severe tremor"
  };
}

