import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
          {/*----about page image------ */}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt="About" />
            <div className='absolute z-20 bottom-4 w-[200px] md:1-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
              <img src={aboutCardImg} alt="About Card" />
            </div>
          </div>
          {/*------About content-------- */}
          <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'>Nations leading site for health assurance!</h2>
            <p className='text_para text-center'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, nemo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque totam suscipit atque unde omnis asperiores fugit eius quibusdam sint maxime.
            </p>
            <p className='text_para text-center'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ab dolor vitae sit facilis obcaecati tempora assumenda enim quasi a?
            </p>
            <Link to='/'><button className='btn'>Learn more</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
