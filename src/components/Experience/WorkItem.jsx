import { motion } from 'framer-motion';
// import HyperLink from '../HyperLink';

const animateWorkSection = {
	hidden: { opacity: 0, y: 50 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5,
			duration: 1,
			type: 'tween',
			delayChildren: 0.25,
			staggerChildren: 0.3,
		},
	},
};

const WorkItem = ({ year, title, company, company_url, duration, details }) => {
	return (
		<article className='w-full flex flex-col md:flex-row'>
			<motion.section
				className='w-full max-w-[18rem] hidden lg:flex flex-col items-top text-xs md:text-sm'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.75 }}
				viewport={{ once: true }}
			>
				{/* DISPLAY ON DESKTOP */}
				<div className='mb-2'>
					<span className='inline-block py-1 px-2 mr-2 font-medium text-white dark:text-gray-700 bg-slate-500 dark:bg-blue-400 rounded-md'>
						{year}
					</span>
					<span className='mr-1 text-base md:text-lg font-medium'>{title}</span>
				</div>
				<div className='w-full'>
					<p className='text-base md:text-lg font-medium'>
						@ &nbsp;
						{/* <HyperLink> */}
						<a
							href={company_url}
							target='_blank'
							aria-label={company}
							className='relative'
						>
							{company}
						</a>
						{/* </HyperLink> */}
					</p>
				</div>

				<p className='mt-3 text-xs sm:text-sm font-normal text-gray-400'>
					{duration}
				</p>

				{/* END DISPLAY ON DESKTOP */}
			</motion.section>
			<motion.ol
				className='flex flex-col lg:flex-row relative border-l border-gray-300 dark:border-gray-600'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.8 }}
				viewport={{ once: true }}
			>
				<motion.li
					className='mb-10 ml-4'
					variants={animateWorkSection}
					initial='hidden'
					whileInView='animate'
					viewport={{ once: true }}
				>
					<motion.div
						className='absolute mt-1.5 -left-1.5 w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.4, delay: 1.5 }}
						viewport={{ once: true }}
					/>
					{/* DISPLAY ON MOBILE */}
					<motion.section
						className='lg:hidden flex flex-col flex-wrap justify-start text-xs md:text-sm'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.75 }}
						viewport={{ once: true }}
					>
						<div className='flex flex-row flex-wrap items-center text-xs sm:text-base md:text-lg'>
							<span className='inline-block py-1 px-2 mr-2 font-medium text-xs sm:text-base text-white dark:text-gray-700 bg-slate-500 dark:bg-blue-400 rounded-md'>
								{year}
							</span>
							<span className='mr-1 font-medium'>{title}</span>
							<p className='font-medium'>
								@ &nbsp;
								{/* <HyperLink> */}
								<a
									href={company_url}
									target='_blank'
									aria-label={company}
									className='relative'
								>
									{company}
								</a>
								{/* </HyperLink> */}
							</p>
						</div>
						<p className='block lg:hidden my-3 text-xs sm:text-sm font-normal text-gray-400'>
							{duration}
						</p>
					</motion.section>

					{/* END DISPLAY ON MOBILE */}

					<p>{details()}</p>
				</motion.li>
			</motion.ol>
		</article>
	);
};

export default WorkItem;
