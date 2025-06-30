import { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const array = input
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num));
    onSubmit(array);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <label className="block text-sm font-medium">Enter Array (comma separated):</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="e.g., 8, 3, 5, 2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Visualize
      </button>
    </form>
  );
};

export default InputForm;
