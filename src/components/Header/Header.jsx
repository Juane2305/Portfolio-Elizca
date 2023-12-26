import React from 'react';

const Header = () => {
    return (
        <div className='w-full bg-gray-900 flex justify-between text-gray-100 py-7 sticky z-[50] top-0'>
            <section className='ml-10'>
                <h1>LOGO</h1>
            </section>
            <section>
                <ul className='flex space-x-24 mr-10 font-semibold text-lg '>
                    <li className='transform hover:scale-110 duration-500 hover:text-purple-700'><a href="/">Home</a></li>
                    <li className='transform hover:scale-110 duration-500 hover:text-purple-700'><a href="/">Our service</a></li>
                    <li className='transform hover:scale-110 duration-500 hover:text-purple-700'><a href="">Why Elica?</a></li>
                    <li className='transform hover:scale-110 duration-500 hover:text-purple-700'><a href="">Our projects</a></li>
                    <li className='transform hover:scale-110 duration-500 hover:text-purple-700'><a href="">Contact us</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Header;