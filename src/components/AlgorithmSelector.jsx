const AlgorithmSelector = ({ selected, setSelected }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Choose Algorithm:</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="bubbleSort">Bubble Sort</option>
        <option value="selectionSort">Selection Sort</option>
      </select>
    </div>
  );
};

export default AlgorithmSelector;
