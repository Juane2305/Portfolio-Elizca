import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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

    {id: 2, name: <h2 className='font-bold text-xl text-white xl:text-4xl'>Shoes <span className='text-purple-500'>FR</span></h2>, description: i18n.language === "en" ? "On this website we offer a wide range of shoes, where you can explore their prices, sizes and descriptions. In addition, we have a management section that gives you the facility to add, edit or delete both shoes and users." : "En este sitio web te ofrecemos una amplia gama de zapatillas, donde podrás explorar sus precios, tallas y descripciones. Además, disponemos de una sección de gestión que te brinda la facilidad de añadir, editar o eliminar tanto zapatillas como usuarios.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1705419825/localhost_5173_home_Nest_Hub_Max_o2gmxk.png", deploy: <a className='flex justify-center items-center gap-5 bg-purple-500 text-white px-20 py-2 cursor-pointer rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 duration-300 text-xl' href="https://shoes-fr-front.onrender.com/" target="_blank" rel="noreferrer"><GoLinkExternal/></a>},

    {id: 4, name: <h2 className='font-bold text-xl text-white xl:text-4xl'>Los <span className='text-purple-500'>Nogales</span></h2>, description: i18n.language === "en" ? "This page was created for the brewery bar 'Los Nogales', where you can make reservations, view their detailed menu and get information about the services they offer. In addition, you have the option to choose between Spanish or English." : "Esta página fue creada para el bar cervecero 'Los Nogales', donde podrás reservar, visualizar su menú detallado e informarte sobre los servicios que ofrecen. Además, cuenta con la opción de elegir entre los idiomas español o inglés.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1708547712/Nogales/losnogales.vercel.app__Nest_Hub_Max_rpvajr.png",deploy: <a  href="https://losnogales.vercel.app/" target="_blank" className='flex justify-center items-center gap-5 bg-purple-500 text-white px-20 py-2 cursor-pointer rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 duration-300 text-xl' rel="noreferrer"><GoLinkExternal/></a>},

    {id: 5, name: <h2 className='font-bold text-xl text-white xl:text-4xl'>Mdz <span className='text-purple-500'>Automotores</span></h2>, description: i18n.language === "en" ? "In this web page, you will be able to see the cars available, learn a little about the history of the company and find a map with the exact location of our facilities. In addition, we have a contact section where you can ask your questions." : "En esta página web, podrás ver los autos disponibles, conocer un poco sobre la historia de la empresa y encontrar un mapa con la ubicación exacta de nuestras instalaciones. Además, contamos con una sección de contacto donde podrás consultar tus dudas.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707143488/Portfolio%20FR/mdzautomotores.vercel.app__Nest_Hub_Max_1_hxfoff.png", deploy: <a href="https://mdzautomotores.vercel.app/" target="_blank"  className='flex justify-center items-center gap-5 bg-purple-500 text-white px-20 py-2 cursor-pointer rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 duration-300 text-xl' rel="noreferrer"><GoLinkExternal/></a>},

    {id: 6, name: <h2 className='font-bold text-xl text-white xl:text-4xl'>Calicata</h2>, description: i18n.language === "en" ? "This was a page made for the travel agency Calicata. Within it you can see different travel packages, filter them and consult via WhatsApp the package you are interested in. It also has translation into three different languages." : "Esta fue una página realizada para la agencia de viajes Calicata. Dentro de ella podrás ver diferentes paquetes de viajes, filtrarlos y consultar vía WhatsApp el paquete que te haya interesado. También cuenta con traducción a tres idiomas diferentes.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1712870205/Portfolio%20FR/calicatatoursandtravel.tur.ar__Nest_Hub_Max_h1sjnd.png", deploy: <a href="https://calicatatoursandtravel.tur.ar/" target="_blank"  className='flex justify-center items-center gap-5 bg-purple-500 text-white px-20 py-2 cursor-pointer rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 duration-300 text-xl' rel="noreferrer"><GoLinkExternal/></a>},

    {id: 7, name: i18n.language === "en" ? <h2 className='font-bold text-xl text-white xl:text-4xl'>Happy <span className='text-purple-500'>Paws</span></h2> : <h2 className='font-bold text-xl text-white xl:text-4xl'>Patitas <span className='text-purple-500'>Felices</span></h2>, description: i18n.language === "en" ? "Happy Paws is an adoption platform for homeless dogs, where rescuers share detailed information and photos of available animals. The site facilitates contact between potential adopters and rescuers." : "Patitas Felices es una plataforma de adopción de perros sin hogar, donde los rescatadores comparten información detallada y fotos de los animales disponibles. El sitio facilita el contacto entre posibles adoptantes y rescatadores.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1703638345/localhost_3000_home_Nest_Hub_Max_ykyfiz.png"},

    {id: 8, name: <h2 className='font-bold text-xl text-white xl:text-4xl'>Pizzolato <span className='text-purple-500'>Elizondo</span></h2>, description: i18n.language === "en" ? "This page was created for the insurance company 'Pizzolato Elizondo', where you can see their services in detail, learn a little more about the company, see their location and hours, and ask any questions you may have." : "Esta página fue creada para la empresa de seguros 'Pizzolato Elizondo', en la cual podrás ver sus servicios detalladamente, saber un poco más sobre la empresa, ver su ubicación y horarios, y realizar cualquier consulta que tengas.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1712869838/Portfolio%20FR/pizzolatoelizondoseguros.com__Nest_Hub_Max_kt4yqh.png", deploy: <a href="https://pizzolatoelizondoseguros.com/" target="_blank"  className='flex justify-center items-center gap-5 bg-purple-500 text-white px-20 py-2 cursor-pointer rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 duration-300 text-xl' rel="noreferrer"><GoLinkExternal/></a>},

    {id: 9, name: <h2 className='font-bold text-xl text-white xl:text-4xl'>Cosmética <span className='text-purple-500'>Vibras</span></h2>, description: i18n.language === "en" ? "This is a site that offers personal care services. It shows all the services offered in an attractive and elegant way, accompanied by multiple ways of contact so as not to lose any customer." : "Esta es una página que ofrece servicios de cuidado personal. En la misma se muestran todos los servicios que ofrece de una manera atractiva y elegante, acompañado de multiples vías de contacto para así no perder ningún cliente", image: "https://res.cloudinary.com/dfschbyq2/image/upload/v1709076498/Captura_de_pantalla_2024-02-27_202803_vj4kqq.png", deploy: <a href="https://vibras.vercel.app" className='flex justify-center items-center gap-5 bg-purple-500 text-white px-20 py-2 cursor-pointer rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 duration-300 text-xl' target="_blank" rel="noreferrer"><GoLinkExternal/></a>}
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
  