import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Switcher7 = () => {

    const [idioma, setIdioma] = useState(false)

  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
    setIdioma(!idioma);
}
  

  return (
    <div className="flex items-center">
        <img src='https://res.cloudinary.com/dfschbyq2/image/upload/v1715724660/spainflag-removebg-preview_rqsnp8.png' alt="bandera de españa" className="w-6 h-6 mr-2"/>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div onClick={changeLanguage} className="w-11 h-6 bg-purple-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-purple-900 rounded-full peer dark:bg-purple-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-purple-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-500"></div>
      </label>
      <img src='https://res.cloudinary.com/dfschbyq2/image/upload/v1715724659/britishflag-removebg-preview_n3opn5.png' alt="bandera británica" className="w-6 h-6 ml-2"/>
    </div>
  );
};

export default Switcher7;
