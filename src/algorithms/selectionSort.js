export function getSelectionSortSteps(arr) {
  const steps = [];
  const array = [...arr];

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      steps.push({ array: [...array], comparing: [minIndex, j], swapped: false });
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      steps.push({ array: [...array], comparing: [i, minIndex], swapped: true });
    }
  }

  steps.push({ array: [...array], comparing: [], swapped: false, done: true });
  return steps;
}
