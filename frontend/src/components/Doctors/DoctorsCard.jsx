import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const DoctorsCard = ({ doctor }) => {
  const { name, avgRating, totalRating, photo, specialization, totalPatient, hospital } = doctor;

  return (
    <div className='p-3 lg:p-5'>
      <div>
        <img src={photo} className='w-full' alt={name} />
      </div>
      <h2 className='text-xl font-bold'>{name}</h2>
      <p>Specialization: {specialization}</p>
      <p>Rating: {avgRating} ({totalRating} reviews)</p>
      <p>Total Patients: {totalPatient}</p>
      <p>Hospital: {hospital}</p>
      <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='text-lg text-black group-hover:text-white' />
              </Link>
    </div>
  );
}

export default DoctorsCard;
