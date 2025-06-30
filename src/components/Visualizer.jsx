const Visualizer = ({ step }) => {
  if (!step) return null;

  const { array, comparing, swapped, done } = step;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Step Visualization:</h2>
      <div className="flex space-x-2 justify-center">
        {array.map((value, index) => {
          const isComparing = comparing.includes(index);
          const color = isComparing
            ? swapped
              ? 'bg-red-500'
              : 'bg-yellow-500'
            : 'bg-blue-500';

          return (
            <div
              key={index}
              className={`w-10 h-10 flex items-center justify-center ${color} text-white font-bold rounded`}
            >
              {value}
            </div>
          );
        })}
      </div>
      {done && <p className="text-center mt-4 text-green-600 font-medium">Sorting Complete!</p>}
    </div>
  );
};

export default Visualizer;
