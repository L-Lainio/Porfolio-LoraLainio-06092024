import { motion } from 'framer-motion';
import AboutImg from '../../assets/me.webp';
import TechnicalSkills from './TechnicalSkills';

const About = () => {
	return (
		<section
			id='about'
			className='container'
		>
			<motion.h2
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.5 }}
				viewport={{ once: true }}
			>
				About
			</motion.h2>
			<motion.div
				className='w-full flex flex-col md:flex-row justify-center items-center'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.75 }}
				viewport={{ once: true }}
			>
				<div className='flex justify-center w-1/2 md:w-full pb-8 md:pr-12 md:pb-0 opacity-60 hover:opacity-100  transition-all ease-in duration-300'>
					<img
						src={AboutImg}
						className='shadow-lg rounded-full'
						alt="Hi, I'm Lora!"
					/>
				</div>
				<div>
					<p className='mb-5'>
						My interest in coding began back in the early 2000s, when Geocities
						{/* and MySpace were popular. I never thought that customizing a MySpace
						page would lead to teaching myself HTML, CSS, JavaScript, PHP, and
						b2/Greymatter/WordPress just to put together a blog. */}
					</p>
					<p className='mb-5'>
						In my technical career, I have helped a launch a{' '}
						{/* <a
							href='https://tokio-ramen.netlify.app/'
							target='_blank'
							className='about'
							aria-label='Visit Tokio Ramen!'
						>
							local business
						</a>{' '}
						from the ground up, supported a{' '}
						<a
							href='https://nexalure.com/'
							target='_blank'
							className='about'
							aria-label='Nexalure Technologies'
						>
							startup
						</a>
						, and am currently contributing to a national{' '}
						<a
							href='https://blue360media.com/'
							target='_blank'
							className='about'
							aria-label='Blue360 Media'
						>
							book publishing
						</a>{' '}
						company.
					</p>
					<p>
						When I'm not on my computer, I'm most likely traveling the world,
						playing video games, hiking, watching true-crime documentaries, or
						learning new languages
					</p> */}
					</p>
				</div>
			</motion.div>

			<motion.h2
				className='mt-12'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 1 }}
				viewport={{ once: true }}
			>
				Technical Skills
			</motion.h2>
			<motion.div
				className='w-full sm:w-11/12 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 1.25 }}
				viewport={{ once: true }}
			>
				<TechnicalSkills />
			</motion.div>
		</section>
	);
};

export default About;
