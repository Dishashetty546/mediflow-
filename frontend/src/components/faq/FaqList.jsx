import React from 'react';
import FaqItem from './FaqItem';
import { faqs } from './../../assets/data/faqs'; 

const FaqSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="heading">Frequently Asked Questions</h2>
        {faqs.map((item, index) => (
          <FaqItem key={index} item={item} /> 
          
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
