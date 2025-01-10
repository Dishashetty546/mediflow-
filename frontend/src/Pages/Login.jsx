import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form Submitted:', formData); // Replace with actual logic
  };

  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
          Hello! <span className='text-blue-900'>Welcome</span> Back
        </h3>
        <form className='py-4 md:py-0' onSubmit={handleSubmit}>
          <div className='mb-5'>
            <input
              type="email"
              placeholder='Enter Your email here'
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div className='mb-5'>
            <input
              type="password"
              placeholder='Enter Your password here'
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white p-3 rounded mt-4"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm">
          Don’t have an account?{' '}
          <Link to='/register' className='text-blue-800'>
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;

