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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log('Login Successful:', result);
        // Save token to localStorage or cookies
        localStorage.setItem('token', result.token);
        // Redirect to dashboard or another page
        window.location.href = '/dashboard';
      } else {
        console.error('Login Failed:', result.message);
        // Show error to the user
        alert(result.message);
      }
    } catch (err) {
      console.error('An error occurred:', err);
      alert('An unexpected error occurred. Please try again later.');
    }
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

