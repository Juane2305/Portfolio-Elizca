import './style/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const WhyUs = () => {

    const { t, i18n } = useTranslation()


    useEffect(()=>{
        Aos.init({duration: 1000});
      },[])

    return (
      <div id='why' className="h-full w-full bg-[#0D0D0D] pt-10 lg:pt-28 relative isolate">
        <div className="absolute inset-x-0 bottom-28 md:bottom-10 -z-10 transform-gpu blur-[15rem] overflow-hidden sm:-top-54" aria-hidden="true">
            <div className="relative left-[15rem] h-[35rem] md:h-[35rem] lg:h-[35rem] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-950 to-purple-950 md:left-[calc(100%-24rem)] lg:left-[calc(100%-50rem)] sm:w-[72.1875rem]"></div>
        </div>
        <h1 className="text-gray-100 font-bold text-[30px] md:text-[40px] text-center lg:mt-0 cursor-default" data-aos="fade-up">
        {t("why")}
        </h1>
        <section className="flex justify-center mt-5">
          <h2 className="text-white opacity-70 font-semibold sm:text-[20px] text-[15px] text-center w-3/4 cursor-default" data-aos="fade-up">
            {i18n.language === "en" ? <p>In an ever-evolving digital world, your company's <span className='text-purple-500'>online presence</span> is more <span className='text-purple-500'>crucial than ever</span>. At <span className='text-purple-500'>ELIZCA</span>, we pride ourselves on being <span className='text-purple-500'>your trusted partner</span> in creating <span className='text-purple-500'>exceptional web experiences</span>. Here are some compelling reasons to choose us as your web development team:</p> : <p>En un mundo digital en constante evolución, la <span className='text-purple-500'>presencia online</span> de su empresa es <span className='text-purple-500'>más crucial que nunca</span>. En <span className='text-purple-500'>ELIZCA</span>, nos enorgullecemos de ser su <span className='text-purple-500'>socio de confianza</span> en la creación de <span className='text-purple-500'>experiencias web excepcionales</span>. Estas son algunas razones de peso para elegirnos como su equipo de desarrollo web:</p>}
          </h2>
        </section>
        <section className='flex justify-center mt-10'  data-aos="fade-up">
        <main className="w-full sm:w-3/5 p-8 mx-auto">
            <section className="shadow row">
                <div className="tabs">
                    <div className="border-b border-purple-500 tab">
                        <div className="border-l-2 border-transparent relative">
                            <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1"/>
                            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                <span className="text-gray-100 font-thin text-xl">
                                {t("expertise")}
                                </span>
                                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                   
                                    <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div className="tab-content">
                                <div className="pl-8 pr-8 pb-5 text-gray-100">
                                    <p className='px-4 cursor-default'>
                                        {t("expertiseInfo")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-purple-500 tab">
                        <div className="border-l-2 border-transparent relative">
                            <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2"/>
                            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck2">
                                <span className="text-gray-100 font-thin text-xl">
                                    {t("personalized")}
                                </span>
                                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                   
                                    <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div className="tab-content">
                                <div className="pl-8 pr-8 pb-5 text-gray-100">
                                    <p className='px-4 cursor-default'>
                                    {t("personalizedInfo")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-purple-500 tab">
                        <div className="border-l-2 border-transparent relative">
                            <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3"/>
                            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck3">
                                <span className="text-gray-100 font-thin text-xl">
                                   {t("innovative")}
                                </span>
                                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    
                                    <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div className="tab-content">
                                <div className="pl-8 pr-8 pb-5 text-gray-100">
                                    <p className='px-4 cursor-default'>
                                    {t("innovativeInfo")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-purple-500 tab">
                        <div className="border-l-2 border-transparent relative">
                            <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1"/>
                            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                <span className="text-gray-100 font-thin text-xl">
                                    {t("quality")}
                                </span>
                                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                   
                                    <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div className="tab-content">
                                <div className="pl-8 pr-8 pb-5 text-gray-100">
                                    <p className='px-4 cursor-default'>
                                        {t("qualityInfo")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-purple-500 tab">
                        <div className="border-l-2 border-transparent relative">
                            <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1"/>
                            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                <span className="text-gray-100 font-thin text-xl">
                                   {t("support")}
                                </span>
                                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                   
                                    <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div className="tab-content">
                                <div className="pl-8 pr-8 pb-5 text-gray-100" >
                                    <p className='px-4 cursor-default'>
                                        {t("supportInfo")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </section>
        <section className='flex justify-center mt-7' data-aos="fade-up">
            <h2 className='text-gray-100 font-semibold text-[20px] text-center w-3/4 sm:w-1/2 opacity-70 cursor-default  pt-8'>
            {i18n.language === "en" ? <p>At <span className='text-purple-500'>ELIZCA</span>, we don't just build websites; we build <span className='text-purple-500'>lasting partnerships</span>. Trust us to take your online presence to the next level.</p> : <p>En <span className='text-purple-500'>ELIZCA</span>, no sólo construimos sitios web; construimos <span className='text-purple-500'>asociaciones duraderas</span>. Confíe en nosotros para llevar su presencia online al siguiente nivel.</p>}
            </h2>
        </section>
      </div>
    );
};

export default WhyUs;