import React, { useState } from "react";

const HeartPrediction = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">Heart Disease Prediction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Sex</label>
          <input
            type="text"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            placeholder="Enter sex"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Chest Pain Type (cp)</label>
          <input
            type="text"
            name="cp"
            value={formData.cp}
            onChange={handleChange}
            placeholder="Enter chest pain type"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Resting Blood Pressure (trestbps)</label>
          <input
            type="number"
            name="trestbps"
            value={formData.trestbps}
            onChange={handleChange}
            placeholder="Enter resting blood pressure"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cholesterol (chol)</label>
          <input
            type="number"
            name="chol"
            value={formData.chol}
            onChange={handleChange}
            placeholder="Enter cholesterol"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Fasting Blood Sugar (fbs)</label>
          <input
            type="number"
            name="fbs"
            value={formData.fbs}
            onChange={handleChange}
            placeholder="Enter fasting blood sugar"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Resting ECG (restecg)</label>
          <input
            type="text"
            name="restecg"
            value={formData.restecg}
            onChange={handleChange}
            placeholder="Enter resting ECG results"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Max Heart Rate (thalach)</label>
          <input
            type="number"
            name="thalach"
            value={formData.thalach}
            onChange={handleChange}
            placeholder="Enter max heart rate"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Exercise Induced Angina (exang)</label>
          <input
            type="text"
            name="exang"
            value={formData.exang}
            onChange={handleChange}
            placeholder="Enter exercise-induced angina"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Oldpeak</label>
          <input
            type="number"
            name="oldpeak"
            value={formData.oldpeak}
            onChange={handleChange}
            placeholder="Enter oldpeak"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Slope</label>
          <input
            type="text"
            name="slope"
            value={formData.slope}
            onChange={handleChange}
            placeholder="Enter slope"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Major Vessels (ca)</label>
          <input
            type="number"
            name="ca"
            value={formData.ca}
            onChange={handleChange}
            placeholder="Enter number of major vessels"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Thalassemia (thal)</label>
          <input
            type="text"
            name="thal"
            value={formData.thal}
            onChange={handleChange}
            placeholder="Enter thalassemia information"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HeartPrediction;
