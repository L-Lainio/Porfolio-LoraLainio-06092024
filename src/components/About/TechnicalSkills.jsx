import FastForward from '../Icons/FastForward';

const technicalSkills = [
	{
		category: 'Languages',
		items: ['JavaScript (ES6)', 'HTML5', 'CSS3'],
	},
	{
		category: 'Technologies',
		items: [
			'ReactJS + React Native',
			'NextJS',
			'Redux',
			'NodeJS',
			'REST APIs',
			'GraphQL',
		],
	},
	{
		category: 'Databases',
		items: ['MySQL', 'MongoDB'],
	},
	{
		category: 'Tools',
		items: ['Git', 'Figma', 'Expo', 'Chrome Dev Tools', 'Adobe Photoshop'],
	},
];

const TechnicalSkills = () => {
	const icon = <FastForward />;
	return (
		<>
			{technicalSkills.map((skills) => (
				<ul
					key={skills.category}
					className='tech-list leading-loose'
				>
					<h3 className="font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">
						{skills.category}
					</h3>
					{skills.items.map((item) => (
						<li key={item}>
							{icon} {item}
						</li>
					))}
				</ul>
			))}
		</>
	);
};

export default TechnicalSkills;
