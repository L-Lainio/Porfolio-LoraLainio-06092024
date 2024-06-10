import { motion } from 'framer-motion';
import Project from './Project';

const Portfolio = () => {
	return (
		<section
			id='projects'
			className='max-w-screen-xl m-auto md:pl-20 px-8 py-12 sm:py-28'
		>
			<motion.h2
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.5 }}
				viewport={{ once: true }}
			>
				Projects
			</motion.h2>
			<Project />
		</section>
	);
};

export default Portfolio;
