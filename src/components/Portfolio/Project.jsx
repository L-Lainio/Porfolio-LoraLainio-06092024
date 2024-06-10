import { motion } from 'framer-motion';

import ExternalLink from '../Icons/ExternalLink';
import GitHub from '../Icons/GitHub';

const projects = [
	{
		title: 'REact-Portfolio',
		thumbnail: REactPortfolioImg,
		description:
			'',
		technologies: 'ReactJS / Tailwind CSS / JavaScript',
		url: '/',
		github: '/',
	},
];

const animateProject = {
	hidden: { opacity: 0, y: 50 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.75,
			duration: 0.4,
			type: 'tween',
			delayChildren: 0.5,
			staggerChildren: 0.4,
		},
	},
};

const animateProjectItem = {
	hidden: { opacity: 0, y: 50 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			type: 'tween',
		},
	},
};

const Project = () => {
	return (
		<motion.div
			className='w-full flex justify-center items-center'
			variants={animateProject}
			initial='hidden'
			whileInView='animate'
			viewport={{ once: true }}
		>
			<ul className='list-none flex flex-row flex-wrap justify-center gap-8'>
				{projects.map((project) => (
					<motion.li
						key={project}
						className='group w-full md:max-w-xs'
						variants={animateProjectItem}
						viewport={{ once: true }}
					>
						<a
							href={project.url}
							target='_blank'
							aria-label='Visit application'
						>
							<div className='w-full h-full flex flex-col items-stretch overflow-hidden bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg dark:shadow-gray-600 opacity-70 hover:opacity-100 transition-all duration-300 ease-in cursor-pointer'>
								<img
									src={project.thumbnail}
									alt={project.title}
									className='w-full h-full object-cover md:h-auto'
								/>

								<div class='w-full h-full flex flex-col justify-between p-4'>
									<div className='flex justify-between align-baseline'>
										<div>
											<h3 className='mb-3 font-semibold text-emerald-400 dark:text-teal-200 text-xl uppercase tracking-tighter'>
												{project.title}
											</h3>
										</div>
										<div>
											<a
												href={project.url}
												target='_blank'
												aria-label='View deployed application'
											>
												<button
													id='external-link-btn'
													className='project-links'
												>
													<ExternalLink />
												</button>
											</a>
											<a
												href={project.github}
												target='_blank'
												aria-label='View GitHub Repo'
											>
												<button
													id='github-link-btn'
													className='project-links'
												>
													<GitHub />
												</button>
											</a>
										</div>
									</div>
									<p className='mb-2 text-sm leading-snug'>
										{project.description}
									</p>
									<p className="mb-2 font-['Source_Code_Pro'] text-slate-500 dark:text-blue-400 text-xs text-center tracking-tight py-2">
										{project.technologies}
									</p>
								</div>
							</div>
						</a>
					</motion.li>
				))}
			</ul>
		</motion.div>
	);
};

export default Project;
