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
          <label className="block text-sm font-medium text-gray-700">Blood Pressure (bp)</label>
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
          <label className="block text-sm font-medium text-gray-700">Specific Gravity (sg)</label>
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
          <label className="block text-sm font-medium text-gray-700">Albumin (al)</label>
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
          <label className="block text-sm font-medium text-gray-700">Sugar (su)</label>
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
          <label className="block text-sm font-medium text-gray-700">Red Blood Cells (rbc)</label>
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
          <label className="block text-sm font-medium text-gray-700">Pus Cell (pc)</label>
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
          <label className="block text-sm font-medium text-gray-700">Pus Cell Clumps (pcc)</label>
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
          <label className="block text-sm font-medium text-gray-700">Bacteria (ba)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700"> (bgr)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(bu)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">(sc)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(sod)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(pot)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(hemo)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(pcv)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(wc)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(rc)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(htn)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(dm)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(cad)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(appet)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(pe)</label>
          <input
            type="text"
            name="bacteria"
            value={formData.bacteria}
            onChange={handleChange}
            placeholder="Enter bacteria count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">(ane)</label>
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
