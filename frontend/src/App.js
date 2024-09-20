import React, { useState } from 'react';
import HeartPrediction from './components/HeartPrediction';
import KidneyPrediction from './components/KidneyPrediction';

function App() {
  const [activeTab, setActiveTab] = useState('heart');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Health Prediction Dashboard</h1>
      
      {/* Tabs */}
      <div className="flex border-b mb-4">
        <button
          className={`py-2 px-4 -mb-px font-semibold text-lg ${
            activeTab === 'heart'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-600 hover:text-blue-500'
          }`}
          onClick={() => setActiveTab('heart')}
        >
          Heart Prediction
        </button>
        <button
          className={`py-2 px-4 -mb-px font-semibold text-lg ${
            activeTab === 'kidney'
              ? 'border-b-2 border-green-500 text-green-500'
              : 'text-gray-600 hover:text-green-500'
          }`}
          onClick={() => setActiveTab('kidney')}
        >
          Kidney Prediction
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-md">
        {activeTab === 'heart' && <HeartPrediction />}
        {activeTab === 'kidney' && <KidneyPrediction />}
      </div>
    </div>
  );
}

export default App;
