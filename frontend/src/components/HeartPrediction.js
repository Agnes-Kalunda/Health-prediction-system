import React, { useState } from "react";
import axios from "axios";

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

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/heart-disease-predictions/predict/", formData);
      setPrediction(response.data);
      setError(null);
    } catch (err) {
      setError("An error occurred while making the prediction.");
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">Heart Disease Prediction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Age (age)</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter Age"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Sex (sex)</label>
          <input
            type="text"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            placeholder="0 for female,1 for male"
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
            placeholder="Enter between 0-3"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Resting Blood Pressure (trestbps)</label>
          <input
            type="text"
            name="trestbps"
            value={formData.trestbps}
            onChange={handleChange}
            placeholder="Enter Resting Blood Pressure"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Cholesterol (chol)</label>
          <input
            type="text"
            name="chol"
            value={formData.chol}
            onChange={handleChange}
            placeholder="Enter Cholesterol"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fasting Blood Sugar (fbs)</label>
          <input
            type="text"
            name="fbs"
            value={formData.fbs}
            onChange={handleChange}
            placeholder="Fasting Blood Sugar"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Resting Electrocardiographic Results (restecg)</label>
          <input
            type="text"
            name="restecg"
            value={formData.restecg}
            onChange={handleChange}
            placeholder="Enter Resting Electrocardiographic Results"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Maximum Heart Rate Achieved (thalach)</label>
          <input
            type="text"
            name="thalach"
            value={formData.thalach}
            onChange={handleChange}
            placeholder="Enter Maximum Heart Rate Achieved"
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
            placeholder="Enter Exercise Induced Angina"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Oldpeak (oldpeak)</label>
          <input
            type="text"
            name="oldpeak"
            value={formData.oldpeak}
            onChange={handleChange}
            placeholder="Enter Oldpeak"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Slope (slope)</label>
          <input
            type="text"
            name="slope"
            value={formData.slope}
            onChange={handleChange}
            placeholder="Enter Slope"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Major Vessels Colored by Fluoroscopy (ca)</label>
          <input
            type="text"
            name="ca"
            value={formData.ca}
            onChange={handleChange}
            placeholder="Enter Number of Major Vessels Colored by Fluoroscopy"
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
            placeholder="Enter Thalassemia"
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

      {/* Display prediction result */}
      {prediction && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          <h3 className="font-bold">Prediction Result:</h3>
          <p>{prediction.message}</p>
          <p>
            <strong>Probability:</strong> {prediction.prediction_probability}
          </p>
        </div>
      )}

      {/* Display error */}
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default HeartPrediction;
