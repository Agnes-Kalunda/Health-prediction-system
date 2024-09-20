import React, { useState } from 'react';

function HeartPrediction() {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement prediction logic or API call here
    console.log('Heart Prediction Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Heart Disease Prediction</h2>

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

      {/* Sex */}
      <div className="mb-4">
        <label className="block text-gray-700">Sex</label>
        <select
          name="sex"
          value={formData.sex}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        >
          <option value="">Select Sex</option>
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>
      </div>

      {/* Chest Pain Type */}
      <div className="mb-4">
        <label className="block text-gray-700">Chest Pain Type (cp)</label>
        <input
          type="number"
          name="cp"
          value={formData.cp}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      {/* Other fields follow a similar pattern */}
      {/* Resting Blood Pressure */}
      <div className="mb-4">
        <label className="block text-gray-700">Resting Blood Pressure (trestbps)</label>
        <input
          type="number"
          name="trestbps"
          value={formData.trestbps}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      {/* Cholesterol */}
      <div className="mb-4">
        <label className="block text-gray-700">Cholesterol (chol)</label>
        <input
          type="number"
          name="chol"
          value={formData.chol}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </div>

      

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Predict
      </button>
    </form>
  );
}

export default HeartPrediction;
