import {Typewriter} from 'react-simple-typewriter'
import WhyUs from '../../components/WhyUs/WhyUs';
import OurService from '../../components/OurService/OurService';
import Header from '../../components/Header/Header';
import OurProjects from '../../components/OurProjects/OurProjects';
import Footer from '../../components/Footer/Footer';
import ContactUs from '../../components/ContactUs/ContactUs';


const Home = () => {

    return (
        <div  id='home' className='h-screen w-full bg-[#0D0D0D]'>
            <Header/>
            <section className='h-screen px-6 flex flex-col relative isolate pt-36 lg:flex lg:flex-row lg:justify-around lg:items-center lg:pt-0'>
                <div className="absolute inset-x-0 bottom-28 md:bottom-44 -z-10 transform-gpu blur-[7rem] overflow-hidden sm:-top-54" aria-hidden="true">
                    <div className="relative left-[15rem] h-[35rem] md:h-[35rem] lg:h-[65rem] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-950 to-purple-950 md:left-[calc(100%-24rem)] lg:left-[calc(100%-5rem)] sm:w-[72.1875rem]"></div>
                </div>
                <div className='flex flex-col lg:justify-start items-center text-center h-[10rem] sm:h-60 lg:w-1/2 lg:h-auto'>
                    <h1 id='title' className='text-gray-100 font-bold text-4xl sm:text-6xl h-auto cursor-default'></h1>
                    <p className='text-gray-100 text-[20px] sm:text-[30px] h-auto'> 
                        <span className='cursor-default'></span>{' '}
                        <span id='title' className='text-purple-500 font-bold cursor-default'>
                            <Typewriter 
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
                <div className='lg:w-1/2 flex justify-center items-center'>
                    <img src='https://res.cloudinary.com/dreso9ye9/image/upload/v1703606411/Proyecto%20Final/Pngtree_modern_flat_design_concept_of_5332895_urwd9k.png' alt="" className='w-[35rem]'/>
                </div>
            </section>
            <section className=''>
                <OurService/>
            </section>
            <section>
                <WhyUs/>
            </section>
            <section>
                <OurProjects/>
            </section>
            <section>
                <ContactUs/>
            </section>
            <Footer/>
        </div>
    );
};

export default Home;