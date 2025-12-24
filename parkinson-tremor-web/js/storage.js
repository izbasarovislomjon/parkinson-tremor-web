export function saveResult(result) {
  const history = JSON.parse(localStorage.getItem("results") || "[]");
  history.push({
    date: new Date().toISOString(),
    result
  });
  localStorage.setItem("results", JSON.stringify(history));
}

