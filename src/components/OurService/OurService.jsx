import React from 'react';

const OurService = () => {
    return (
        <div>
            <h1 className='text-gray-100 font-bold text-[40px] flex justify-center'>Our Service</h1>
            <div className='flex justify-around space-x-40 mt-16'>
                <section className='flex items-center'>
                    <h2 className='text-gray-100 text-[50px]'>imagen</h2>
                </section>
                <section className= ' mr-10 space-y-16'>
                    <div className=' text-center'>
                        <span className='text-purple-400 text-2xl font-bold'>Custom web design</span>
                        <p className='text-gray-100 text-lg'>We translate your idea into a modern website.</p>
                    </div>
                    <div className=' text-center'>
                        <span className='text-purple-400 text-2xl font-bold'>Responsive design</span>
                        <p className='text-gray-100 text-lg'>Our websites work perfectly on all screen sizes.</p>
                    </div>
                    <div className=' text-center'>
                        <span className='text-purple-400 text-2xl font-bold'>Mantainance</span>
                        <p className='text-gray-100 text-lg'>Our websites work perfectly on all screen sizes.</p>
                    </div>
                </section>
            </div>
            
        </div>
    );
};

export default OurService;