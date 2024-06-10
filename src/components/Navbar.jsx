import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import LogoLightMode from '../assets/logo-lightmode.webp';
import LogoDarkMode from '../assets/logo-darkmode.webp';
import useScrollDirection from '../utils/hooks';
import Menu from './Icons/Menu';
import X from './Icons/X';
import Sun from './Icons/Sun';
import Moon from './Icons/Moon';

const Navbar = ({ darkMode, toggleDarkMode }) => {
	const scrollDirection = useScrollDirection();
	// toggle hamburger menu
	const [nav, setNav] = useState(false);
	const handleNav = () => setNav(!nav);

	// shadow effect on navbar on scroll
	const [top, setTop] = useState(true);
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, [top]);

	return (
		<nav
			className={`sticky ${
				scrollDirection === 'down' ? '-top-[70px]' : 'top-0'
			} ${
				!top && `shadow-lg dark:shadow-gray-700 backdrop-blur-md`
			} h-[70px] transition-all duration-500 z-[99]`}
		>
			<div className='navbar w-full h-full flex justify-between items-center py-4 px-6'>
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
							className='h-10 hover:opacity-75 transition-all ease-in duration-300 cursor-pointer'
						/>
					</a>
				</motion.div>
				{/* NAVBAR AT 768PX & ABOVE */}
				<div>
					<ul className='hidden md:flex md:items-center list-none'>
						<motion.li
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 3 }}
							viewport={{ once: true }}
						>
							<a
								href='#about'
								className='mr-6'
							>
								About
							</a>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 3.25 }}
							viewport={{ once: true }}
						>
							<a
								href='#experience'
								className='mx-6'
							>
								Experience
							</a>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 3.5 }}
							viewport={{ once: true }}
						>
							<a
								href='#projects'
								className='mx-6'
							>
								Projects
							</a>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 3.75 }}
							viewport={{ once: true }}
						>
							<a
								href='#contact'
								className='mx-6'
							>
								Contact
							</a>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 4 }}
							viewport={{ once: true }}
						>
							<a
								href='/Demi-Hayashi-CV.pdf'
								aria-label='View my resume'
								className='mx-6'
							>
								<button
									id='navbar-btn'
									type='submit'
								>
									Resume
								</button>
							</a>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 4.25 }}
							viewport={{ once: true }}
							onClick={toggleDarkMode}
						>
							<div className='ml-6'>{darkMode ? <Sun /> : <Moon />}</div>
						</motion.li>
					</ul>
				</div>

				{/* HAMBURGER MENU AT 768PX & LOWER */}
				<div
					onClick={handleNav}
					className={`md:hidden transition-all ease-in duration-500 z-20`}
				>
					{!nav && <Menu />}
					{nav && (
						<motion.div
							className={`fixed ${
								scrollDirection === 'down' ? 'top-[70px]' : 'top-0'
							} right-0 w-3/4 h-screen shadow-lg dark:shadow-gray-600 bg-gray-100/90 dark:bg-gray-800/90 backdrop-blur-md z-[1]`}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
						>
							<div className='w-full p-6 flex justify-end items-center'>
								<X />
							</div>
							<div className='h-full flex flex-col justify-center items-center font-medium'>
								<a
									href='#about'
									className='mobile-links'
								>
									About
								</a>
								<a
									href='#experience'
									className='mobile-links'
								>
									Experience
								</a>
								<a
									href='#projects'
									className='mobile-links'
								>
									Projects
								</a>
								<a
									href='#contact'
									className='mobile-links'
								>
									Contact
								</a>
								<a
									href='/Demi-Hayashi-CV.pdf'
									aria-label='View my resume'
									className='mobile-links'
								>
									<button
										id='navbar-btn'
										type='submit'
									>
										Resume
									</button>
								</a>
								<button
									onClick={toggleDarkMode}
									className='w-1/2 m-2 p-3 flex justify-center items-center hover:text-emerald-400 dark:hover:text-teal-200 cursor-pointer'
								>
									{darkMode ? <Sun /> : <Moon />}
								</button>
							</div>
						</motion.div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
