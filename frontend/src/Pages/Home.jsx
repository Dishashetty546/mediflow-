import React from 'react';
import { Link } from 'react-router-dom';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import About from '../components/About/About';
import ServiceList from '../components/Services/Services';
import featureImg from '../assets/images/feature-img.png';
import Doctors from '../components/Doctors/Doctors';
import faqImg from '../assets/images/faq-img.png';
import FaqItem from '../components/faq/FaqItem';
import { faqs } from './../assets/data/faqs';

const Home = () => {
  return (
    <>
      {/* ------hero section--------- */}
      <section className='hero_section pt-[60px] exl:h-[800px]'>
        <div className="container">
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/*----hero content------ */}
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text=[60px] md:leading-[70px]'>
                We help Human kingdom to be healthy, wish for longer life
              </h1>
              <p className="text_para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit ghghvn jhjhdjn kjjhginnn mn huuhbjhguy!
              </p>
              <button className='btn'>Request an Appointment</button>
              <br />
              <p className="text_para">Machine learning Models make predictions based on your input - Heart disease, Diabetes, Parkinson's Disease, and many more.</p>
              <Link to="/sidebar">
                <button className='btn'>Test Yourself</button>
              </Link>
              {/*--------hero counter-------- */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-purple-400 rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Years of experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                  <span className='w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Clinic Locations</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-green-400 rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/*hero content */}
            <div className='flex gap-[30px] justify-end'>
              <img className='w-full' src={heroImg01} alt="" />
            </div>

            <div className='mt-[30px]'>
              <img className='w-full mb-[30px]' src={heroImg02} alt="" />
              <img className='w-full ' src={heroImg03} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Other sections... */}
    </>
  );
};

export default Home;
