import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {

  const { t } = useTranslation()

  const [data, setData] = useState({
    username: '',
    email: '',
    message: ''
  })

  const refForm = useRef();


  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      const serviceId = 'service_qkgeyzb'
      const templateId = 'template_2wn43ia'
      // 3er parametro
      const publicKey = 'i9JqoBg9vA0X6dC52'

      emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
        .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      setData({
        username: '',
        email: '',
        message: ''
      })
  }


    return (
      <div id='contact' className="h-full w-full bg-[#0D0D0D] ">
        <h1 className="text-gray-100 font-bold text-[40px] text-center cursor-default m-0">
          {t("yourIdea")}
        </h1>
        <section className='flex justify-center pt-10 mx-5 sm:mx-0'>
          <div className="bg-white px-8 pb-8 rounded-lg shadow-lg max-w-sm w-full mb-20">
            <div className="flex justify-center mb-6">
              
            </div>
            <h2 className="text-2xl font-semibold text-center mb-5 cursor-default">
              {t("contactUs")}
            </h2>
            <form ref={refForm} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  {t("name")}
                </label>
                <input
                  type="text"
                  name='username'
                  id="username"
                  value={data.username}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-purple-500"
                  required
                  placeholder="James Brown"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  {t("email")}
                </label>
                <input
                  type="email"
                  name='email'
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-purple-500"
                  required
                  placeholder="hello@email.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  {t("message")}
                </label>
                <textarea
                  name='message'
                  id="message"
                  value={data.message}
                  onChange={handleChange}
                  className="form-input w-full p-2  border rounded-lg text-gray-700 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                {t("send")}
              </button>
            </form>
          </div>
        </section>
      </div>
    );
};

export default ContactUs;       