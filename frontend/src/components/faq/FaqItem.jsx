import React, { useState } from 'react'; // Correct import for useState
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FaqItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false); // Initially false because the answer is not visible

    const toggleFaq = () => {
        setIsOpen(prevState => !prevState); // Toggle the state
    };

    return (
        <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer' onClick={toggleFaq}>
            <div className='flex items-center justify-between gap-5'>
                <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor'>
                    {item.question}
                </h4>
                <div className={`${isOpen ? 'bg-primaryColor text-white border-none' : ''}`}>
                    {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
            </div>
            {isOpen && (
                <div className='mt-4'>
                    <p className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                        {item.answer}
                    </p>
                </div>
            )}
        </div>
    );
};

export default FaqItem;
