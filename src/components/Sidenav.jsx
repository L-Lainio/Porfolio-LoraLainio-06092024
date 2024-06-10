import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenu } from 'react-icons/ai';
// import { FaBeer } from 'react-icons/fa';
// import { IconName } from "react-icons/fi";
import LogoLightMode from '../assets/logo-lightmode.webp';
import LogoDarkMode from '../assets/logo-darkmode.webp';
import useScrollDirection from '../utils/hooks';
// import Menu from './Icons/Menu';
// import X from './Icons/X';
// import Sun from './Icons/Sun';
// import Moon from './Icons/Moon';

const Sidenav = (props) => {
    const scrollDirection = useScrollDirection();
    // toggle hamburger menu
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    // shadow effect on navbar on scroll
    const [Left, setLeft] = useState(true);
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setLeft(false) : setLeft(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);


    return (
        <><><nav /><div className="menu-icon-container">
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
        </div></><><div className={`sticky ${scrollDirection === 'down' ? '-top-[70px]' : 'top-0'}
                            ${isLeftHandSideExpression && `shadow-lg dark:shadow-gray-700 backdrop-blur-md`}
                            h-[70px] transition-all duration-500 z-[99]`}></div><div className='navbar w-full h-full flex justify-between items-center py-4 px-6'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3, delay: 3 }}
                        viewport={{ once: true }}
                    >
                        <a href='/'>
                            <img
                                src={darkMode ? LogoDarkMode : LogoLightMode}
                                alt='DH'
                                className='h-10 hover:opacity-75 transition-all ease-in duration-300 cursor-pointer' />
                        </a>
                    </motion.div>
                    :
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMenu size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMenu size={20} />
                            <span className='pl-4'>Work</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMenu size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMenu size={20} />
                            <span className='pl-4'>Resume</span>
                        </a>
                    </div>
                </div></></>
    );


export default Sidenav;
<Sidenav darkMode={someValue} toggleDarkMode={someFunction} />
