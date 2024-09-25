import React, { useState } from "react";
import axios from "axios";

const KidneyPrediction = () => {
  const [formData, setFormData] = useState({
    age: "",
    bp: "",
    sg: "",
    al: "",
    su: "",
    rbc: "",
    pc: "",
    pcc: "",
    ba: "",
    bgr: "",
    bu: "",
    sc: "",
    sod: "",
    pot: "",
    hemo: "",
    pcv: "",
    wc: "",
    rc: "",
    htn: "",
    dm: "",
    cad: "",
    appet: "",
    pe: "",
    ane: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/kidney-predictions/predict/", formData);
      setPrediction(response.data);
      setError(null);
    } catch (err) {
      setError("An error occurred while making the prediction.");
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">Kidney Disease Prediction</h2>
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
          <label className="block text-sm font-medium text-gray-700">Blood Pressure (bp)</label>
          <input
            type="text"
            name="bp"
            value={formData.bp}
            onChange={handleChange}
            placeholder="Enter Blood Pressure"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Specific Gravity (sg)</label>
          <input
            type="text"
            name="sg"
            value={formData.sg}
            onChange={handleChange}
            placeholder="Enter Specific Gravity"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Albumin (al)</label>
          <input
            type="text"
            name="al"
            value={formData.al}
            onChange={handleChange}
            placeholder="Enter Albumin"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Sugar (su)</label>
          <input
            type="text"
            name="su"
            value={formData.su}
            onChange={handleChange}
            placeholder="Enter Sugar"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Red Blood Cells (rbc)</label>
          <input
            type="text"
            name="rbc"
            value={formData.rbc}
            onChange={handleChange}
            placeholder="Enter Red Blood Cells"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pus Cell (pc)</label>
          <input
            type="text"
            name="pc"
            value={formData.pc}
            onChange={handleChange}
            placeholder="Enter Pus Cell"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pus Cell Clump (pcc)</label>
          <input
            type="text"
            name="pcc"
            value={formData.pcc}
            onChange={handleChange}
            placeholder="Enter Pus Cell Clump"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Bacteria (ba)</label>
          <input
            type="text"
            name="ba"
            value={formData.ba}
            onChange={handleChange}
            placeholder="Enter Bacteria"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Blood Glucose Random (bgr)</label>
          <input
            type="text"
            name="bgr"
            value={formData.bgr}
            onChange={handleChange}
            placeholder="Enter Blood Glucose Random"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Blood Urea (bu)</label>
          <input
            type="text"
            name="bu"
            value={formData.bu}
            onChange={handleChange}
            placeholder="Enter Blood Urea"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Serum Creatinine (sc)</label>
          <input
            type="text"
            name="sc"
            value={formData.sc}
            onChange={handleChange}
            placeholder="Enter Serum Creatinine"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Sodium (sod)</label>
          <input
            type="text"
            name="sod"
            value={formData.sod}
            onChange={handleChange}
            placeholder="Enter Sodium"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Potassium (pot)</label>
          <input
            type="text"
            name="pot"
            value={formData.pot}
            onChange={handleChange}
            placeholder="Enter Potassium"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Hemoglobin (hemo)</label>
          <input
            type="text"
            name="hemo"
            value={formData.hemo}
            onChange={handleChange}
            placeholder="Enter Hemoglobin"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Packed Cell Volume (pcv)</label>
          <input
            type="text"
            name="pcv"
            value={formData.pcv}
            onChange={handleChange}
            placeholder="Enter Packed Cell Volume"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">White Blood Cell Count (wc)</label>
          <input
            type="text"
            name="wc"
            value={formData.wc}
            onChange={handleChange}
            placeholder="Enter White Blood Cell Count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Red Blood Cell Count (rc)</label>
          <input
            type="text"
            name="rc"
            value={formData.rc}
            onChange={handleChange}
            placeholder="Enter Red Blood Cell Count"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Hypertension (htn)</label>
          <input
            type="text"
            name="htn"
            value={formData.htn}
            onChange={handleChange}
            placeholder="Enter Hypertension"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Diabetes Mellitus (dm)</label>
          <input
            type="text"
            name="dm"
            value={formData.dm}
            onChange={handleChange}
            placeholder="Enter Diabetes Mellitus"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Coronary Artery Disease (cad)</label>
          <input
            type="text"
            name="cad"
            value={formData.cad}
            onChange={handleChange}
            placeholder="Enter Coronary Artery Disease"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Appetite (appet)</label>
          <input
            type="text"
            name="appet"
            value={formData.appet}
            onChange={handleChange}
            placeholder="Enter Appetite"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pedal Edema (pe)</label>
          <input
            type="text"
            name="pe"
            value={formData.pe}
            onChange={handleChange}
            placeholder="Enter Pedal Edema"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Anemia (ane)</label>
          <input
            type="text"
            name="ane"
            value={formData.ane}
            onChange={handleChange}
            placeholder="Enter Anemia"
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

export default KidneyPrediction;
