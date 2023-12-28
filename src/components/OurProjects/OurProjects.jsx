import auto from '../../public/auto.png'
import totebags from '../../public/totebags.png'
import dogs from '../../public/dogs.png'
import imc from '../../public/imc.png'

const OurProjects = () => {
  return (
    <div id='projects' className='h-full flex flex-col justify-center items-center bg-[#0D0D0D] pt-10 pb-10 lg:pt-20 lg:pb-24'>
        <h1 className="text-white font-bold text-[30px] sm:text-[40px] text-center m-0">Our projects</h1>
        <div id="indicators-carousel" className="relative w-[15rem] pt-10 sm:w-[30rem] lg:w-[45rem] lg:pt-5" data-carousel="static">
            <div className="relative h-44 overflow-hidden rounded-lg sm:h-80 lg:h-[30rem] z-10">
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src={auto} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={totebags} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={dogs} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={imc} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
            </div>
           
            <div className="absolute z-10 sm:flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-4 lg:bottom-8 left-1/2 bg-purple-400 p-2 rounded-full hidden">
                <button type="button" className="w-2 h-2 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-2 h-2 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-2 h-2 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-2 h-2 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            </div>
        
            <button type="button" className="absolute right-[15rem] sm:right-[32rem] lg:right-[50rem] top-0 z-10 flex items-center justify-center h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 sm:bg-purple-700 rounded-full transform hover:scale-105 duration-300">
                    <svg className="w-4 h-4 text-white ring-black rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute left-[15rem] sm:left-[32rem] lg:left-[50rem] top-0 z-10 flex items-center justify-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 sm:bg-purple-700 rounded-full transform hover:scale-105 duration-300">
                    <svg className="w-4 h-4 text-white ring-black rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    </div>
  )
}

export default OurProjects