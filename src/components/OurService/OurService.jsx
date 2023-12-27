import React from "react";
import img from './img/five-stars.png'
import { DevicePhoneMobileIcon, PencilSquareIcon, Cog6ToothIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Custom web design',
    description:
      'We translate your idea into a modern website.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Responsive design',
    description:
      'Our websites work perfectly on all screen sizes.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Continuous mantainance',
    description:
      'We offer 1 month of free mantainance.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'E-commerce website',
    description:
      'We empower your online store with intuitive and secure features.',
    icon: ShoppingCartIcon,
  },
]

const OurService = () => {
  return (
    <div className="h-full w-full bg-[#0D0D0D] z-50">
      <h1 className="text-white font-bold text-[40px] text-center m-0">
        Our Service
      </h1>
      <div className='bg-gradient-to-tr from-purple-950 to-purple-800'>
        <div className="mx-auto mt-10 max-w-3xl lg:w-full py-10 px-10 lg:px-0">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:max-w-none md:grid-cols-2 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md">
                    <feature.icon className="h-6 w-6 text-purple-700" aria-hidden="true"/>
                  </div>
                  <p className='text-lg text-white font-semibold'>{feature.name}</p>
                </dt>
                <dd className="mt-2 text-sm text-white opacity-55 font-normal">{feature.description}</dd>
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
