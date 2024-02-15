import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import backgroundR from '../../public/waveline2.svg'
import { GoLinkExternal } from "react-icons/go";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import "preline/preline";

const OurProjects = () => {

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])


  const { t, i18n } = useTranslation()

  const projects = [
    {id: 1, name: <h2 className='font-bold text-xl text-white xl:text-4xl'>MJ <span className='text-purple-500'>Agency</span></h2>, description: i18n.language === "en" ? "This project was developed for the company M&J Agency, providing detailed information about the company, the services they offer, the team that integrates it and a contact section to resolve any questions you may have." : "Este proyecto fue desarrollado para la empresa M&J Agency, proporcionando información detallada sobre la empresa, los servicios que ofrecen, el equipo que la integra y una sección de contacto para resolver cualquier consulta que puedas tener.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707144180/Portfolio%20FR/www.mjagency.info__Nest_Hub_Max_pw55pp.png", deploy: <a href="https://www.mjagency.info/" className='flex justify-center items-center gap-5 bg-purple-500 text-white px-20 py-2 cursor-pointer rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 duration-300 text-xl' target="_blank" rel="noreferrer"><GoLinkExternal/></a>},

    {id: 2, name: <h2 className='font-bold text-xl text-white xl:text-4xl'>Shoes <span className='text-purple-500'>FR</span></h2>, description: i18n.language === "en" ? "On this website we offer a wide range of shoes, where you can explore their prices, sizes and descriptions. In addition, we have a management section that gives you the facility to add, edit or delete both shoes and users." : "En este sitio web te ofrecemos una amplia gama de zapatillas, donde podrás explorar sus precios, tallas y descripciones. Además, disponemos de una sección de gestión que te brinda la facilidad de añadir, editar o eliminar tanto zapatillas como usuarios.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1705419825/localhost_5173_home_Nest_Hub_Max_o2gmxk.png"},

    {id: 3, name: <h2 className='font-bold text-xl text-white xl:text-4xl'>Sonidos <span className='text-purple-500'>Reservados</span></h2>, description: i18n.language === "en" ? "Here you will find a wide variety of instruments for booking. You can log in to check the availability of dates. As an administrator user you can access the administration section to manage users and instruments." : "Aquí encontrarás una gran variedad de instrumentos para reservar. Puedes iniciar sesión para verificar la disponibilidad de fechas. Siendo usuario administrador puedes acceder a la sección de administración para gestionar usuarios e instrumentos.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707404260/localhost_8080__Nest_Hub_Max_u6hkyg.png"},

    {id: 4, name: <h2 className='font-bold text-xl text-white xl:text-4xl'>Mdz <span className='text-purple-500'>Automotores</span></h2>, description: i18n.language === "en" ? "In this web page, you will be able to see the cars available, learn a little about the history of the company and find a map with the exact location of our facilities. In addition, we have a contact section where you can ask your questions." : "En esta página web, podrás ver los autos disponibles, conocer un poco sobre la historia de la empresa y encontrar un mapa con la ubicación exacta de nuestras instalaciones. Además, contamos con una sección de contacto donde podrás consultar tus dudas.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707143488/Portfolio%20FR/mdzautomotores.vercel.app__Nest_Hub_Max_1_hxfoff.png", deploy: <a href="https://mdzautomotores.vercel.app/" target="_blank"  className='flex justify-center items-center gap-5 bg-purple-500 text-white px-20 py-2 cursor-pointer rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 duration-300 text-xl' rel="noreferrer"><GoLinkExternal/></a>},

    {id: 5, name: i18n.language === "en" ? <h2 className='font-bold text-xl text-white xl:text-4xl'>Happy <span className='text-purple-500'>Paws</span></h2> : <h2 className='font-bold text-xl text-white xl:text-4xl'>Patitas <span className='text-purple-500'>Felices</span></h2>, description: i18n.language === "en" ? "Happy Paws is an adoption platform for homeless dogs, where rescuers share detailed information and photos of available animals. The site facilitates contact between potential adopters and rescuers." : "Patitas Felices es una plataforma de adopción de perros sin hogar, donde los rescatadores comparten información detallada y fotos de los animales disponibles. El sitio facilita el contacto entre posibles adoptantes y rescatadores.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1703638345/localhost_3000_home_Nest_Hub_Max_ykyfiz.png"},
]


  return (
      <div>
        <h1 id="projects" className="text-white font-bold text-[30px] sm:text-[40px] text-center cursor-default pt-10 z-20" data-aos="fade-up">
          {t("ourProjects")}
        </h1>
        <div data-aos="fade" id="projects" className="px-16 lg:px-28 pt-10 flex flex-col justify-center items-center">
          <Carousel
          data-aos="fade-up"
          opts={{
              align: "start",
          }}
          className="2xl:w-[80%] w-full"
          >
          <CarouselContent>
              {projects.map((project) => (
              <CarouselItem key={project.id} className="">
                  <Card className="w-full border-none outline-none flex justify-center items-center">
                      <CardContent className="flex flex-col lg:flex lg:flex-row items-center justify-start p-6 bg-gradient-to-tr from-[#0e0719] to-[#261244]  lg:h-full sm:h-[37rem] h-[30rem] gap-5 lg:gap-0 shadow-sombra-imagenes">
                        <img src={project.image} alt="" className="shadow-sombra-imagenes w-[35rem] 2xl:w-[40rem]"/>
                          <section className="flex flex-col justify-center items-center gap-5">
                              <div className="flex flex-col justify-start items-center gap-4">
                                  {project.name}
                                  <p className="text-center font-semibold text-sm xl:text-base text-white opacity-70 lg:px-16">{project.description}</p>
                              </div>
                              {project.deploy}
                          </section>
                      </CardContent>
                  </Card>
              </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="border-palette-500 text-white outline-none hover:opacity-80 hover:bg-purple-500 hover:text-white transform hover:scale-105 duration-500"/>
          <CarouselNext className="border-palette-500 text-white outline-none hover:opacity-80 hover:bg-purple-500 hover:text-white transform hover:scale-105 duration-500"/>
          </Carousel>
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