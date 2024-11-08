import React from 'react';
import DoctorsCard from '../../components/Doctors/DoctorsCard';
import { doctors } from './../../assets/data/doctors';

const Doctors = () => {

  return (
    <>
    <section className='bg-[#f0eee9]'>
      <div className="container text-center">
        <h2 className='heading'>find a Doctor</h2>
        <div className='max-w-[570px] mt-[30px[ mx-auto bg-[#8691a02c] rounded-md flex items-center justify-between'>
          <input type="text" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Seach doctor' />
          <button className='btn mt-0 rounded-[0px] '>Search</button>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 '>
      {doctors.map((doctor)=>(
        <DoctorsCard key={doctor.id} doctor={doctor}/>
      ))}
    </div>
      </div>
    </section>
    </>
  )
}

export default Doctors