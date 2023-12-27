import React, { useState } from 'react'
import british from './img/britishflag.png'
import spainflag from './img/spainflag.png'
import { useTranslation } from 'react-i18next';


const Switcher7 = () => {

    const { i18n } = useTranslation()



    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en'? 'es' : 'en')
    }

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        <img src={british} alt=""  className='w-6 mr-2'/>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
            onClick={changeLanguage}
          />
          <div className='block h-6 w-10 rounded-full border border-[#BFCEFF] bg-[#EAEEFB]'></div>
          <div className='dot bg-purple-500 absolute left-1 top-1 h-4 w-4 rounded-full transition'></div>
        </div>
        <img src={spainflag} alt="" className='w-6 ml-2'/>
      </label>
    </>
  )
}

export default Switcher7


// https://pngtree.com/freepng/england-flag-png-illustration_7962927.html
// https://pngtree.com/freepng/spain-flag_8688918.html