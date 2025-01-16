import React from "react";

const Sidebar = ({ onSelectDisease }) => {
  const diseases = ["heart", "diabetes", "parkinsons"];

  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <h2 className="text-lg font-bold mb-4">Disease Prediction</h2>
      <ul>
        {diseases.map((disease) => (
          <li
            key={disease}
            className="cursor-pointer mb-2 p-2 rounded hover:bg-gray-700"
            onClick={() => onSelectDisease(disease)}
          >
            {disease.charAt(0).toUpperCase() + disease.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
