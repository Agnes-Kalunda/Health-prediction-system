import React from 'react';

function HeartPrediction() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Heart Disease Prediction</h2>
      <form>
    
        <input
          type="number"
          placeholder="Age"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        {/* More form fields */}
        <button className="w-full bg-blue-500 text-white py-2 rounded">Predict</button>
      </form>
    </div>
  );
}

export default HeartPrediction;
