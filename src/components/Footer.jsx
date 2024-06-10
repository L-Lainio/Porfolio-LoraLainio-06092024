import { motion } from 'framer-motion';

import Heart from './Icons/Heart';
import GitHub from './Icons/GitHub';
import Linkedin from './Icons/Linkedin';
import Instagram from './Icons/Instagram';
import Mail from './Icons/Mail';

const Footer = () => {
	return (
		<footer className='footer pb-8 text-xs sm:text-sm'>
			<div className='flex flex-col justify-center items-center'>
				<p className='flex justify-center items-center'>
					Made with <Heart /> by &nbsp;
					<a
						href='https://github.com/L-Lainio/L-Lainio.github.io'
						target='_blank'
						className='text-emerald-400 hover:text-slate-500 dark:text-teal-200 dark:hover:text-blue-400'
					>
						Demi
					</a>
					.
				</p>
				<p>
					<span className='text-emerald-400 dark:text-teal-200'>&copy;</span>{' '}
					2024. All rights reserved.
				</p>
			</div>

			{/* DISPLAY SOCIAL MEDIA ICONS ON SIDE OVER 768PX SCRN RES */}
			<div className='social hidden md:block fixed top-[40%] z-10'>
				<ul className='list-none flex flex-col'>
					<motion.li
						initial={{ opacity: 0, x: -70 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 1.75 }}
						viewport={{ once: true }}
					>
						<a
							href='https://github.com/L-Lainio'
							target='_blank'
							aria-label='GitHub'
						>
							<GitHub size={30} />
						</a>
					</motion.li>
					<motion.li
						initial={{ opacity: 0, x: -70 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 2 }}
						viewport={{ once: true }}
					>
						<a
							href='https://www.linkedin.com/in/lora-lainio-1a3a55255/'
							target='_blank'
							aria-label='LinkedIn'
						>
							<Linkedin size={30} />
						</a>
					</motion.li>
					<motion.li
						initial={{ opacity: 0, x: -70 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 2.25 }}
						viewport={{ once: true }}
					>
						<a
							href='https://www.instagram.com/user'
							target='_blank'
							aria-label='Instagram'
						>
							<Instagram size={30} />
						</a>
					</motion.li>
					<motion.li
						initial={{ opacity: 0, x: -70 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 2.5 }}
						viewport={{ once: true }}
					>
						<a
							href='mailto:arollainio@gmail.com'
							aria-label='E-mail me at arollainio@gmail.com'
						>
							<Mail size={30} />
						</a>
					</motion.li>
				</ul>
			</div>

			{/* DISPLAY SOCIAL MEDIA ICONS ON BOTTOM UNDER 768PX SCRN RES */}
			<div className='mini-social'>
				<ul className='md:hidden flex flex-row justify-center'>
					<li>
						<a
							href='https://github.com/L-Lainio'
							target='_blank'
							aria-label='GitHub'
						>
							<GitHub size={24} />
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/lora-lainio-1a3a55255/'
							target='_blank'
							aria-label='LinkedIn'
						>
							<Linkedin size={24} />
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/user/'
							target='_blank'
							aria-label='Instagram'
						>
							<Instagram size={24} />
						</a>
					</li>
					<li>
						<a
							href='mailto:arollainio@gmail.com'
							aria-label='E-mail me at arollainio@gmail.com'
						>
							<Mail size={24} />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
