import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {patientAvatar} from '../../assets/images/patient-avatar.png';
//defect in this page , page is not working ---> work on this
const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px] h-[400px]'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Muhibur Rehaman</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
};

export default Testimonial;
