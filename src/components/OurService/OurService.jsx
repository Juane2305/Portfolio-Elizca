import { DevicePhoneMobileIcon, PencilSquareIcon, Cog6ToothIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const OurService = () => {

  const { t } = useTranslation()


  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])
  
  const features = [
    {
      id: 1,
      name: <span>{t("customWeb")}</span>,
      description:
        <span>{t("customInfo")}</span>,
      icon: PencilSquareIcon,
    },
    {
      id: 2,
      name: <span>{t("responsive")}</span>,
      description:
        <span>{t("responsiveInfo")}</span>,
      icon: DevicePhoneMobileIcon,
    },
    {
      id: 3,
      name: <span>{t("mantainance")}</span>,
      description:
        <span>{t("mantainanceInfo")}</span>,
      icon: Cog6ToothIcon,
    },
    {
      id: 4,
      name: <span>{t("e-commerce")}</span>,
      description:
        <span>{t("e-commerceInfo")}</span>,
      icon: ShoppingCartIcon,
    },
  ]

  return (
    <div id="service" className="h-full w-full bg-[#0D0D0D] z-50">
      <h1 className="text-white font-bold sm:text-[40px] text-[30px] text-center m-0 cursor-default" data-aos="fade-up">
       {t("ourService")}
      </h1>
      <div className='bg-gradient-to-tr from-purple-950 to-purple-800' data-aos="fade-up">
        <div className="mx-auto mt-10 max-w-3xl lg:w-full py-10 px-10 lg:px-0">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:max-w-none md:grid-cols-2 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.id} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md">
                    <feature.icon className="h-6 w-6 text-purple-700" aria-hidden="true"/>
                  </div>
                  <p className='text-lg text-white font-semibold cursor-default'>{feature.name}</p>
                </dt>
                <dd className="mt-2 text-sm text-white opacity-55 font-normal cursor-default">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default OurService;
