import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import backgroundR from '../../public/waveline2.svg'


import "preline/preline";

const OurProjects = () => {

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])


  const { t, i18n } = useTranslation()


  return (
      <div>
        <h1 id="projects" className="text-white font-bold text-[30px] sm:text-[40px] text-center cursor-default py-10" data-aos="fade-up">
          {t("ourProjects")}
        </h1>
        <div className="flex flex-col justify-center items-center py-5  md:flex-row md:justify-start md:items-center md:my-10 z-20 relative">
          <h2 className="text-gray-100 text-lg font-semibold pb-2 md:hidden" data-aos="fade-up">{i18n.language === "en" ? <p>Happy <span className='text-purple-700'>Paws</span></p> : <p>Patitas <span className='text-purple-700'>Felices</span></p>}</h2>
          <img src='https://res.cloudinary.com/dreso9ye9/image/upload/v1703638345/localhost_3000_home_Nest_Hub_Max_ykyfiz.png' alt="" className="w-[80%] md:w-[50%] flex rounded-sm z-20" data-aos="fade-up"/>
          <div className="hidden md:flex md:flex-col md:w-[50%] md:items-center">
            <img src={backgroundR} alt="" className='absolute right-0 top-0'/>
            <h2 className="text-gray-100 text-xl font-bold lg:text-2xl pb-3 z-20" data-aos="fade-up">{i18n.language === "en" ? <p>Happy <span className='text-purple-700'>Paws</span></p> : <p>Patitas <span className='text-purple-700'>Felices</span></p>}</h2>
            <p className="text-gray-100 w-3/4 text-center text-sm lg:text-lg z-20" data-aos="fade-up">
            {t("firstInfo")}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-5 md:flex-row md:justify-end md:items-center md:my-10 relative">
          <h2 className="text-gray-100 text-lg font-semibold pb-2 md:hidden" data-aos="fade-up">Mendoza <span className='text-purple-700'>Automotores</span></h2>
          <div className="hidden md:flex md:flex-col md:w-[50%] md:items-center">
          <img src={backgroundR} alt="" className='absolute left-0 top-0'/>
            <h2 className="text-gray-100 text-xl font-bold lg:text-2xl pb-3 z-20" data-aos="fade-up">Mendoza <span className='text-purple-700'>Automotores</span></h2>
            <p className="text-gray-100 w-3/4 text-center text-sm lg:text-lg z-20" data-aos="fade-up">
              {t("secondInfo")}
            </p>
          </div>
          <img src='https://res.cloudinary.com/dreso9ye9/image/upload/v1703635365/mdzautomotores.vercel.app__Nest_Hub_Max_nslnoo.png' alt="" className="w-[80%] md:w-[50%] flex rounded-sm z-20" data-aos="fade-up"/>
        </div>
        <div className="flex flex-col justify-center items-center py-5 md:flex-row md:justify-start md:items-center md:my-10 relative" >
          <h2 className="text-gray-100 text-lg font-semibold pb-2 md:hidden z-20">Tote <span className='text-purple-700'>Bags</span></h2>
          <img src='https://res.cloudinary.com/dreso9ye9/image/upload/v1705419825/localhost_5173_home_Nest_Hub_Max_o2gmxk.png' alt="" className="w-[80%] md:w-[50%] flex z-20 rounded-sm" data-aos="fade-up"/>
          <div className="hidden md:flex md:flex-col md:w-[50%] md:items-center">
            <img src={backgroundR} alt="" className='absolute right-0 top-0'/>
            <h2 className="text-gray-100 text-xl font-bold lg:text-2xl pb-3 z-20" data-aos="fade-up">Shoes <span className='text-purple-700'>FR</span></h2>
            <p className="text-gray-100 w-3/4 text-center text-sm lg:text-lg z-20" data-aos="fade-up">
            {t("thirdInfo")}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default OurProjects;
  
  
  // <div data-hs-carousel='{
  //     "loadingClasses": "opacity-0",
  //     "isAutoPlay": false
  //   }' className="relative pt-10 lg:pt-28 z-10">
  //     <h1 id="projects" className="text-white font-bold text-[30px] sm:text-[40px] text-center cursor-default">
  //    Our Projects
  //   </h1>
  //   <div className="hs-carousel relative overflow-hidden w-full min-h-[200px] md:min-h-[400px] lg:min-h-[500px]">
  //     <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
  //       <div className="hs-carousel-slide">
  //         <div className="flex justify-center h-full m-6">
  //           <img key={1} src='https://res.cloudinary.com/dreso9ye9/image/upload/v1703638345/localhost_3000_home_Nest_Hub_Max_ykyfiz.png' alt="" className="w-[300px] sm:w-[650px] lg:w-[50rem] z-50"/>
  //         </div>
  //       </div>
  //       <div className="hs-carousel-slide">
  //         <div className="flex justify-center h-full m-6">
  //           <img key={2} src='https://res.cloudinary.com/dreso9ye9/image/upload/v1703635365/mdzautomotores.vercel.app__Nest_Hub_Max_nslnoo.png' alt="" className="w-[300px] sm:w-[650px] lg:w-[50rem] z-50"/>
  //         </div>
  //       </div>
  //       <div className="hs-carousel-slide">
  //         <div className="flex justify-center h-full m-6">
  //           <img key={3} src='https://res.cloudinary.com/dreso9ye9/image/upload/v1703636291/localhost_5174_home_Nest_Hub_Max_augr8p.png' alt="" className="w-[300px] sm:w-[650px] lg:w-[50rem] z-50"/>
  //         </div>
  //       </div>
        
  //   </div>
  
  //   <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute left-0 inset-y-0 lg:left-[10rem] inline-flex justify-center items-center w-[46px] h-full text-gray-200 cursor-default">
  //     <span className="text-2xl cursor-pointer p-2 rounded-full flex justify-center items-center hover:bg-gray-200/[.1]" aria-hidden="true">
  //       <svg className="w-4 h-4 lg:w-10 lg:h-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  //         <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  //       </svg>
  //     </span>
  //     <span className="sr-only">Previous</span>
  //   </button>
  //   <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 right-0 lg:right-[10rem] inline-flex justify-center items-center w-[46px] h-full text-gray-200 cursor-default">
  //     <span className="sr-only">Next</span>
  //     <span className="text-2xl cursor-pointer p-2 rounded-full flex justify-center items-center hover:bg-gray-200/[.1]" aria-hidden="true">
  //       <svg className="w-4 h-4 lg:w-10 lg:h-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  //         <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
  //       </svg>
  //     </span>
  //   </button>
  //   <div className="hs-carousel-pagination flex justify-center absolute bottom-4 start-0 end-0 space-x-2 pt-5">
  //     <span className="hs-carousel-active:bg-purple-500 hs-carousel-active:border-purple-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
  //     <span className="hs-carousel-active:bg-purple-500 hs-carousel-active:border-purple-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
  //     <span className="hs-carousel-active:bg-purple-500 hs-carousel-active:border-purple-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
  //   </div>
  // </div>
  // </div>