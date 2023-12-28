import logo from '../../public/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#000] pt-10">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#service" className="hover:underline me-4 md:me-6">Our service</a>
                    </li>
                    <li>
                        <a href="#why" className="hover:underline me-4 md:me-6">Why Elica?</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:underline me-4 md:me-6">Our projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">Contact us</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Elica</a>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer