import React from 'react';
import whatsapp from './img/whatsapp.png'

const phoneNumber = '+542612404253'; // Acá tienen que agregar su número de teléfono


const WhatsappButton = () => {
    const whatsappLink = 'https://wa.me/' + phoneNumber;

  
    return (
      <a href={whatsappLink} target="_blank"
      className='fixed bottom-3 right-1 z-50 w-20 h-20 justify-center items-center hover:transform hover:scale-110 duration-500'
      >
        <img
            className='img z-50 w-12 h-12'
            src={whatsapp}
            alt="WhatsApp"
        />
      </a>

    );
};

export default WhatsappButton;