import React, { useState } from "react";

const PredictionForm = ({ disease }) => {
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(""); // New state for error messages

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

  const numericFields = new Set([
    "age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalach",
    "Pregnancies", "Glucose", "BloodPressure", "SkinThickness", "Insulin",
    "BMI", "DiabetesPedigreeFunction", "Age",
    "MDVP_Fo", "MDVP_Fhi", "MDVP_Flo", "Shimmer", "HNR", "RPDE"
  ]);

  const validateInput = (name, value) => {
    if (numericFields.has(name) && isNaN(value)) {
      return "Please enter a valid number.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: numericFields.has(name) ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Reset error messages

    const url = `http://127.0.0.1:5000/predict/${disease.toLowerCase()}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        {disease.charAt(0).toUpperCase() + disease.slice(1)} Prediction
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields[disease].map((field) => (
          <div key={field} className="relative">
            <label htmlFor={field} className="block text-gray-700 font-medium mb-2">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              id={field}
              type="text"
              name={field}
              onChange={handleChange}
              value={formData[field] || ""}
              placeholder={`Enter ${field}`}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors[field] ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors[field] && (
              <span className="text-sm text-red-500 absolute bottom-0 left-0">
                {errors[field]}
              </span>
            )}
          </div>
        ))}

        <button
          type="submit"
          className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-all duration-300 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>

      {errorMessage && (
        <div className="mt-4 text-center text-red-600 font-semibold">
          {errorMessage}
        </div>
      )}

      {prediction !== null && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-bold">Prediction Result:</h3>
          <p className={`text-xl ${prediction ? "text-green-500" : "text-red-500"}`}>
            {prediction ? "Positive" : "Negative"}
          </p>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
