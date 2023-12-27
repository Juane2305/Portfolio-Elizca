import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next';
import Switcher7 from '../Switcher/Switcher';
import logo from './img/logo.png';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  
  const { t } = useTranslation()
  
  const navigation = [
    {id:1, name: <span>{t("home")}</span>, href: '#', current: true },
    {id:2, name: <span>{t("service")}</span>, href: '#service', current: false },
    {id:3, name: <span>{t("whyElica")}</span>, href: '#why', current: false },
    {id:4, name: <span>{t("ourProjects")}</span>, href: '#projects', current: false },
    {id:5, name: <span>{t("contact")}</span>, href: '#contact', current: false },
  ]
  return (
    <Disclosure as="nav" className="fixed z-20 w-full bg-black bg-opacity-25 backdrop-filter backdrop-blur-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div>
                <div className="flex flex-1 items-center sm:justify-evenly">
                  <div className="flex flex-shrink-0">
                    <img src={logo} alt="" className='w-28'/>
                  </div>
                  <div className="hidden lg:ml-6 lg:block">
                    <div className="flex space-x-4 ml-7">
                      {navigation.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          className={classNames(
                            item.current ? 'transform hover:scale-110 duration-500 text-purple-700' : 'text-gray-300 hover:text-purple-700 transform hover:scale-110 duration-500',
                            'rounded-md px-3 py-2 text-lg font-semibold'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
              <div className='ml-5'>
                <Switcher7/>
              </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-6 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-purple-700' : 'text-gray-300 hover:text-purple-700 transform hover:scale-105 duration-500',
                    'block rounded-md px-3 py-2 text-base text-center font-medium bg-[#0D0D0D]'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}