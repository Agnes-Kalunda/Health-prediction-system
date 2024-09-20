import React, { useState } from "react";

const KidneyPrediction = () => {
  const [formData, setFormData] = useState({
    age: "",
    bloodPressure: "",
    specificGravity: "",
    albumin: "",
    sugar: "",
    redBloodCells: "",
    pusCell: "",
    pusCellClumps: "",
    bacteria: "",
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
      <h2 className="text-2xl font-bold mb-4">Kidney Disease Prediction</h2>
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
          <label className="block text-sm font-medium text-gray-700">Blood Pressure</label>
          <input
            type="number"
            name="bloodPressure"
            value={formData.bloodPressure}
            onChange={handleChange}
            placeholder="Enter blood pressure"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Specific Gravity</label>
          <input
            type="number"
            name="specificGravity"
            value={formData.specificGravity}
            onChange={handleChange}
            placeholder="Enter specific gravity"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Albumin</label>
          <input
            type="number"
            name="albumin"
            value={formData.albumin}
            onChange={handleChange}
            placeholder="Enter albumin"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Sugar</label>
          <input
            type="number"
            name="sugar"
            value={formData.sugar}
            onChange={handleChange}
            placeholder="Enter sugar level"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Red Blood Cells</label>
          <input
            type="text"
            name="redBloodCells"
            value={formData.redBloodCells}
            onChange={handleChange}
            placeholder="Enter red blood cell count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Pus Cell</label>
          <input
            type="text"
            name="pusCell"
            value={formData.pusCell}
            onChange={handleChange}
            placeholder="Enter pus cell count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Pus Cell Clumps</label>
          <input
            type="text"
            name="pusCellClumps"
            value={formData.pusCellClumps}
            onChange={handleChange}
            placeholder="Enter pus cell clumps"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bacteria</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default KidneyPrediction;
