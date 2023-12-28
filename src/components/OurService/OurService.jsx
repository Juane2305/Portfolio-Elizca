import { DevicePhoneMobileIcon, PencilSquareIcon, Cog6ToothIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';


const OurService = () => {
  
  const features = [
    {
      id: 1,
      name: <span></span>,
      description:
        <span></span>,
      icon: PencilSquareIcon,
    },
    {
      id: 2,
      name: <span></span>,
      description:
        <span></span>,
      icon: DevicePhoneMobileIcon,
    },
    {
      id: 3,
      name: <span></span>,
      description:
        <span></span>,
      icon: Cog6ToothIcon,
    },
    {
      id: 4,
      name: <span></span>,
      description:
        <span></span>,
      icon: ShoppingCartIcon,
    },
  ]

  return (
    <div id="service" className="h-full w-full bg-[#0D0D0D] z-50">
      <h1 className="text-white font-bold text-[40px] text-center m-0 cursor-default">
       
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
    </div>
  );
};

export default OurService;
