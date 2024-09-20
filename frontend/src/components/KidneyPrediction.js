import React, { useState } from 'react';

function KidneyPrediction() {
  const [formData, setFormData] = useState({
    age: '',
    bloodPressure: '',
    specificGravity: '',
    albumin: '',
    sugar: '',
    redBloodCells: '',
    pusCell: '',
    pusCellClumps: '',
    bacteria: '',
    bloodGlucoseRandom: '',
    bloodUrea: '',
    serumCreatinine: '',
    sodium: '',
    potassium: '',
    hemoglobin: '',
    packedCellVolume: '',
    whiteBloodCellCount: '',
    redBloodCellCount: '',
    hypertension: '',
    diabetesMellitus: '',
    coronaryArteryDisease: '',
    appetite: '',
    pedaEdema: '',
    anemia: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Kidney Prediction Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Kidney Disease Prediction</h2>

      {/* Age */}
      <div className="mb-4">
        <label className="block text-gray-700">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      {/* Blood Pressure */}
      <div className="mb-4">
        <label className="block text-gray-700">Blood Pressure</label>
        <input
          type="number"
          name="bloodPressure"
          value={formData.bloodPressure}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      {/* Specific Gravity */}
      <div className="mb-4">
        <label className="block text-gray-700">Specific Gravity</label>
        <input
          type="number"
          name="specificGravity"
          value={formData.specificGravity}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      {/* Albumin */}
      <div className="mb-4">
        <label className="block text-gray-700">Albumin</label>
        <input
          type="number"
          name="albumin"
          value={formData.albumin}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Predict
      </button>
    </form>
  );
}

export default KidneyPrediction;
