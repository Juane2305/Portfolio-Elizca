const phoneNumber = '+542616986923'; // Acá tienen que agregar su número de teléfono


const WhatsappButton = () => {
    const whatsappLink = 'https://wa.me/' + phoneNumber;

  
    return (
      <a href={whatsappLink} target="_blank"
      className='fixed bottom-3 right-1 z-50 w-20 h-20 justify-center items-center hover:transform hover:scale-110 duration-500'
      >
        <img
            className='img z-50 w-12 h-12'
            src='https://res.cloudinary.com/dfschbyq2/image/upload/v1706035880/whatsapp_j8ynng.png'
            alt="WhatsApp"
        />
      </a>

    );
};

export default WhatsappButton;