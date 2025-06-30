import { useState } from 'react';
import {  useEffect } from 'react';

import Navbar from '../components/Navbar';
import AlgorithmSelector from '../components/AlgorithmSelector';
import InputForm from '../components/InputForm';
import Visualizer from '../components/Visualizer';
import { getBubbleSortSteps } from "../algorithms/bubbleSort.js";
import { getSelectionSortSteps } from '../algorithms/selectionSort.js';



const Home = () => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [algorithm, setAlgorithm] = useState('bubbleSort');

<AlgorithmSelector selected={algorithm} setSelected={setAlgorithm} />
  const handleSubmit = (array) => {
  let result = [];
  if (algorithm === 'bubbleSort') {
    result = getBubbleSortSteps(array);
  } else if (algorithm === 'selectionSort') {
    result = getSelectionSortSteps(array);
  }
  setSteps(result);
  setCurrentStep(0);
};
  useEffect(() => {
  let interval;
  if (isPlaying && steps.length > 0 && currentStep < steps.length - 1) {
    interval = setInterval(() => {
      setCurrentStep(prev => prev + 1);
    }, 1000);
  } else {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
}, [isPlaying, currentStep, steps]);


  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">AlgoVisual: DSA Visualizer</h1>
        <AlgorithmSelector />
        <InputForm onSubmit={handleSubmit} />
        <Visualizer step={steps[currentStep]} />
        {steps.length > 0 && (
          <div className="text-center mt-4 space-x-4">
            <button
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Prev
            </button>
            <button
              onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
            <button
  onClick={() => setIsPlaying(prev => !prev)}
  className={`px-4 py-2 rounded ${isPlaying ? 'bg-red-500' : 'bg-green-600'} text-white`}
>
  {isPlaying ? 'Pause' : 'Auto Play'}
</button>

          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
