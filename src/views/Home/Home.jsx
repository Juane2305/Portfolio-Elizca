import React from 'react';
import imagen from './img/imagen-inicio.jpg'
import {Typewriter} from 'react-simple-typewriter'
import WhyUs from '../../components/WhyUs/WhyUs';
import OurService from '../../components/OurService/OurService';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <div className='h-full w-full bg-[#0D0D0D]'>
            <Header/>
            <section className='pt-10 pl-10 flex justify-between h-[600px]'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-gray-100 font-bold text-[70px] ml-10'>HI, WE ARE ELICA</h1>
                    <p className='ml-10 text-gray-100 text-[35px]'> 
                        We{' '}
                        <span className='text-purple-500 font-bold'>
                            <Typewriter 
                                words={['are developers.', 'can take your business to the next level.','are professionals.']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                cursorColor='purple'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </p>
                </div>
                <div>
                    <img src={imagen} alt="" className='w-[1000px]  rounded-sm'/>
                </div>
            </section>
            <section className='mt-[300px]'>
                <OurService/>
            </section>
            <section className='mt-[200px]'>
                <WhyUs/>
            </section>
        </div>
    );
};

export default Home;