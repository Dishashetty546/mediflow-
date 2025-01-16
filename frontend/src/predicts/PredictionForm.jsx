import React, { useState } from "react";

const PredictionForm = ({ disease }) => {
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState(null);

  const fields = {
    heart: ["age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalach"],
    diabetes: [
      "Pregnancies",
      "Glucose",
      "BloodPressure",
      "SkinThickness",
      "Insulin",
      "BMI",
      "DiabetesPedigreeFunction",
      "Age",
    ],
    parkinsons: ["MDVP_Fo", "MDVP_Fhi", "MDVP_Flo", "Shimmer", "HNR", "RPDE"],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://127.0.0.1:5000/predict/${disease}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while making the prediction.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields[disease].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 font-medium">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type="text"
              name={field}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Predict
        </button>
      </form>
      {prediction !== null && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Prediction Result:</h3>
          <p className="text-green-500">{prediction ? "Positive" : "Negative"}</p>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
