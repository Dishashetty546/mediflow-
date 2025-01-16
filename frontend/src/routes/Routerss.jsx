import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';  // Import useNavigate
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Contact from '../Pages/Contact';
import Doctors from '../Pages/Doctors/Doctors';
import DoctorDetails from '../Pages/Doctors/DoctorDetails';
import Sidebar from '../predicts/Sidebar';
import PredictionForm from '../predicts/PredictionForm';

const Routerss = () => {
  const [selectedDisease, setSelectedDisease] = useState("heart");
  const navigate = useNavigate();  // Hook to handle navigation

  const handleSelectDisease = (disease) => {
    setSelectedDisease(disease);
    navigate("/predict");  // Redirect to /predict after selecting a disease
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sidebar" element={<Sidebar onSelectDisease={handleSelectDisease} />} />
      <Route path="/predict" element={<PredictionForm disease={selectedDisease} />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
    </Routes>
  );
};

export default Routerss;
