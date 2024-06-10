import { motion } from 'framer-motion';
// import HyperLink from './HyperLink';
// import Button from './Button';
import Greeting from './Greeting';

const Home = () => {
	return (
		<section
			id='main'
			className='max-w-screen-md m-auto px-8 w-full h-screen flex flex-col justify-center items-start'
		>
			<div className='intro'>
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					viewport={{ once: true }}
				>
					<Greeting />, I'm <span className='gradient'>Lora</span>.
				</motion.h1>
				<motion.h1
					className='pt-2'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.75 }}
					viewport={{ once: true }}
				>
					I'm a <span className='gradient'>full-stack developer</span>.
				</motion.h1>
			</div>
			<motion.p
				className='py-4'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1.25 }}
				viewport={{ once: true }}
			>
				I am a full-stack web developer living in Lake City, FL with a passion for
				technologies. I enjoy creating and designing various projects, such as{' '}
				<a
					href='https://github.com/L-Lainio'
					target='_blank'
					className='home'
					aria-label='Visit my GitHub!'
				>
					web applications
				</a>

				<a
				// 	href='/Lora-Lainio-CV.pdf'
				// 	aria-label='View my resume'
				// >
				// 	<Button>Download CV</Button>
				></a>
			</motion.p>

		</section>
	);
};

export default Home;
