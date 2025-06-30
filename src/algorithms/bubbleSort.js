// bubbleSort.js - returns array of steps

export function getBubbleSortSteps(arr) {
  const steps = [];
  const array = [...arr]; // clone original array

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      steps.push({ array: [...array], comparing: [j, j + 1], swapped: false });

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        steps.push({ array: [...array], comparing: [j, j + 1], swapped: true });
      }
    }
  }

  steps.push({ array: [...array], comparing: [], swapped: false, done: true });
  return steps;
}
