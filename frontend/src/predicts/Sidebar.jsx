import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const Sidebar = ({ onSelectDisease }) => {
  const navigate = useNavigate();  // Hook for navigation

  const diseases = ["heart", "diabetes", "parkinsons"];

  const handleClick = (disease) => {
    onSelectDisease(disease);  // Update selected disease state
    navigate("/predict");  // Navigate to /predict route
  };

  return (
    <div className="bg-blue-900 text-white w-64 p-4">
      <h2 className="text-lg font-bold mb-4">Disease Prediction</h2>
      <ul>
        {diseases.map((disease) => (
          <li
            key={disease}
            className="cursor-pointer mb-2 p-2 rounded hover:bg-gray-700"
            onClick={() => handleClick(disease)}  // Trigger disease selection and navigation
          >
            {disease.charAt(0).toUpperCase() + disease.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
