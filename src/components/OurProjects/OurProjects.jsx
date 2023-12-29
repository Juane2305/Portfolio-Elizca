import auto from "../../public/auto.png";
import totebags from "../../public/totebags.png";
import dogs from "../../public/dogs.png";
// import imc from "../../public/imc.png";

const OurProjects = () => {
  return (
    <div data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "isAutoPlay": false
      }' className="relative pt-10 lg:pt-28 z-10">
        <h1 id="projects" className="text-white font-bold text-[30px] sm:text-[40px] text-center cursor-default">
       Our Projects
      </h1>
      <div className="hs-carousel relative overflow-hidden w-full min-h-[200px] md:min-h-[400px] lg:min-h-[500px]">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full m-6">
              <img key={1} src='https://res.cloudinary.com/dreso9ye9/image/upload/v1703638345/localhost_3000_home_Nest_Hub_Max_ykyfiz.png' alt="" className="w-[300px] sm:w-[650px] lg:w-[50rem] "/>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full m-6">
              <img key={2} src='https://res.cloudinary.com/dreso9ye9/image/upload/v1703635365/mdzautomotores.vercel.app__Nest_Hub_Max_nslnoo.png' alt="" className="w-[300px] sm:w-[650px] lg:w-[50rem] "/>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full m-6">
              <img key={3} src='https://res.cloudinary.com/dreso9ye9/image/upload/v1703636291/localhost_5174_home_Nest_Hub_Max_augr8p.png' alt="" className="w-[300px] sm:w-[650px] lg:w-[50rem] "/>
            </div>
          </div>
          
      </div>
    
      <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute left-0 inset-y-0 lg:left-[10rem] inline-flex justify-center items-center w-[46px] h-full text-gray-200 cursor-default">
        <span className="text-2xl cursor-pointer p-2 rounded-full flex justify-center items-center hover:bg-gray-200/[.1]" aria-hidden="true">
          <svg className="w-4 h-4 lg:w-10 lg:h-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 right-0 lg:right-[10rem] inline-flex justify-center items-center w-[46px] h-full text-gray-200 cursor-default">
        <span className="sr-only">Next</span>
        <span className="text-2xl cursor-pointer p-2 rounded-full flex justify-center items-center hover:bg-gray-200/[.1]" aria-hidden="true">
          <svg className="w-4 h-4 lg:w-10 lg:h-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </span>
      </button>
      <div className="hs-carousel-pagination flex justify-center absolute bottom-4 start-0 end-0 space-x-2 pt-5">
        <span className="hs-carousel-active:bg-purple-500 hs-carousel-active:border-purple-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span className="hs-carousel-active:bg-purple-500 hs-carousel-active:border-purple-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span className="hs-carousel-active:bg-purple-500 hs-carousel-active:border-purple-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
      </div>
    </div>
    </div>
  );
};

export default OurProjects;

