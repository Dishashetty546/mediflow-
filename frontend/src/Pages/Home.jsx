import React from 'react';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/Services';
import featureImg from '../assets/images/feature-img.png'
import Doctors from '../components/Doctors/Doctors';
import faqImg from '../assets/images/faq-img.png'
import FaqItem from '../components/faq/FaqItem';
import {faqs} from './../assets/data/faqs';

const Home = () => {
  return (
    <>
      {/* ------hero section---------*/}
      <section className='hero_section pt-[60px] exl:h-[800px]'>
        <div className="container">
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/*----hero content------ */}
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text=[60px]  md:leading-[70px]'>
                We help Human kingdom to be healthy, wish for longer life
              </h1>
              <p className="text_para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque atque minus amet officia fuga quo neque dolorum molestiae, laudantium saepe aspernatur nesciunt a fugit. Maiores dignissimos nulla nemo nobis debitis!
              </p>
              <button className='btn'>Request an Appointment</button>
              {/*--------hero counter-------- */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+
                  </h2>
                  <span className='w-[100px] h-2 bg-purple-400 rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Years of experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+
                  </h2>
                  <span className='w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Clinic Locations</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%
                  </h2>
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

      {/*hero-section ends here */}

      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing best medical services</h2>
            <p className='text_para text-center '>Expert health care, world class facilities, care for everyone</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='flex flex-col items-center justify-center'>
              <img src={icon01} alt="" />
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center mt-[30px]'>Find a Doctor</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet!</p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='text-lg text-black group-hover:text-white' />
              </Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={icon02} alt="" />
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center mt-[30px]'>Find Location</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet!</p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='text-lg text-black group-hover:text-white' />
              </Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img src={icon03} alt="" />
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center mt-[30px]'>Book appointment</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet!</p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='text-lg text-black group-hover:text-white' />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/*-----about section start------ */}
      <About/>
   {/*-------services section starts-------- */}
   <section>
    <div className='container'>
      <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Our medical services</h2>
        <p className='text_para text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, impedit?</p>
      </div>
      <ServiceList/>
    </div>
   </section>
   {/*------feature section---- */}
   <section className='py-[75px]'>
        <div className='container flex flex-col lg:flex-row items-center justify-between'>
          {/*-----feature content----- */}
          <div className='xl:w-[670px]'>
            <h2 className='heading'>Get virtual treatment <br/> anytime & anywhere</h2>
            <ul className='pl-4 mt-[20px]'>
              <li className='text_para'>1. Schedule the appointment</li>
              <li className='text_para'>2. Search for your physician here, and contact their office.</li>
              <li className='text_para'>3. View their time schedules, use online scheduling tool to select an appointment time</li>
            </ul>
            <Link to='./'><button className='btn mt-[30px]'>Learn more</button></Link>
          </div>
          {/*----feature-img------ */}
          <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
            <img  className='w-3/4' src={featureImg} alt="Feature Image" />
            
          </div>
        </div>
      </section>

    {/*-----end of feature branch----- */}
    <section>
      <div className="container">
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our great doctors</h2>
          <p className='text_para text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem odit dolores laudantium? Corporis, ad fugiat?</p>
        </div>
        <Doctors/>
      </div>
    </section>
    
    {/*----our great doctors end----- */}
    {/*-----------FAQ section----------- */}
    <section>
      <div className='container'>
        
      </div>
    </section>
     {/*-----------FAQ section end----------- */}
     <section>
  <div className='container'>
    <div className='flex justify-between gap-[50px] lg:gap-0'>
      <div className='w-1/2 hidden md:block'>
        <img src={faqImg} alt="FAQ Illustration" />
      </div>
      <div className='w-full md:w-1/2'>
        <h2 className="heading">
          Most questions by our beloved patients
        </h2>
        {faqs.map((item, index) => (
          <FaqItem key={index} item={item} />
        ))}
      </div>
    </div>
  </div>
</section>
{/* -----------FAQ ends here------------ */}
{/* ------Testimonial------------- */}

{/*--------------Testimonial ends here--------- */}

    </>
  );
}

export default Home;