import React, { useState } from 'react';
import signupImg from '../assets/images/signup.gif';
import avatar from '../assets/images/doctor-img01.png';

const Signup = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the preview image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* Image Box */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt='Signup Illustration' className='w-full rounded-l-lg' />
            </figure>
          </div>
          {/* Signup Form */}
          <div className='bg-white p-8 rounded-r-lg shadow-md'>
            <h2 className='text-2xl font-bold text-headingColor mb-6'>
              Create an Account
            </h2>
            <form>
              <div className='mb-5'>
                <input
                  type="email"
                  placeholder='Enter your email'
                  className='w-full p-3 border rounded'
                  required
                />
              </div>
              <div className='mb-5'>
                <input
                  type="password"
                  placeholder='Enter your password'
                  className='w-full p-3 border rounded'
                  required
                />
              </div>
              <div className='mb-5'>
                <label htmlFor="role" className='block text-sm font-medium text-gray-700 mb-2'>
                  Are you a?
                </label>
                <select
                  id="role"
                  name="role"
                  className='w-full p-3 border rounded bg-white'
                  required
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
              <div className='mb-5'>
                <label htmlFor="gender" className='block text-sm font-medium text-gray-700 mb-2'>
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className='w-full p-3 border rounded bg-white'
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className='mb-5'>
                <label htmlFor="imageUpload" className='block text-sm font-medium text-gray-700 mb-2'>
                  Upload Your Profile Picture
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className='w-full p-2 border rounded bg-white'
                  onChange={handleImageChange}
                />
                {selectedImage && (
                  <div className='mt-4'>
                    <figure className='w-32 h-32 rounded-full overflow-hidden mx-auto'>
                      <img
                        src={selectedImage}
                        alt="Profile Preview"
                        className='w-full h-full object-cover'
                      />
                    </figure>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className='w-full bg-blue-900 text-white p-3 rounded mt-4'
              >
                Signup
              </button>
            </form>
            <p className='mt-4 text-sm'>
              Already have an account?{' '}
              <a href='/login' className='text-blue-800'>
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
