import React from "react";
import { DevicePhoneMobileIcon, PencilSquareIcon, Cog6ToothIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';



const OurService = () => {
  
  const { t } = useTranslation()
  
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
      <h1 className="text-white font-bold text-[40px] text-center m-0 cursor-default">
        {t("ourService")}
      </h1>
      <div className='bg-gradient-to-tr from-purple-950 to-purple-800'>
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
      {/* <div className="flex flex-col text-center justify-between">
        
        <section className="flex flex-col justify-evenly items-center  mt-10 space-y-16  lg:flex-row lg:space-y-0 lg:mb-16">
          <div className=" text-center w-80 lg:w-60 lg:h-20 lg:px-2">
            <span className="text-purple-500 lg:h-10 text-lg font-bold md:text-2xl">
              Custom web design
            </span>
            <p className="text-gray-100 mt-2 text-sm md:text-base">
              We translate your idea into a modern website.
            </p>
          </div>
          <div className=" text-center w-80 lg:w-60 lg:h-20 lg:px-2">
            <span className="text-purple-500 h-10 text-lg font-bold md:text-2xl">
              Responsive design
            </span>
            <p className="text-gray-100 mt-2 text-sm md:text-base">
              Our websites work perfectly on all screen sizes.
            </p>
          </div>
          <div className=" text-center w-80 lg:w-60 lg:h-20 lg:px-2">
            <span className="text-purple-500 h-10 text-lg font-bold md:text-2xl">
              Continuous mantainance
            </span>
            <p className="text-gray-100 mt-2 text-sm md:text-base">
              We offer 1 month of free mantainance.
            </p>
          </div>
          <div className=" text-center w-80 lg:w-60 lg:h-20 lg:px-2">
            <span className="text-purple-500 h-10 text-lg font-bold md:text-2xl">
              E-commerce website
            </span>
            <p className="text-gray-100 mt-2 text-sm md:text-base">
              We empower your online store with intuitive and secure features.
            </p>
          </div>
        </section>
        <section className="flex justify-center mt-3">
          <img src={img}alt="5 stars" className="w-[25rem]"/>
        </section>
      </div> */}
    </div>
  );
};

export default OurService;
