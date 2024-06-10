const Heart = () => {
	return (
		<div>
			<svg
				width='18'
				height='18'
				fill='none'
				stroke='currentColor'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				className='mx-1 text-emerald-400 dark:text-teal-200'
			>
				<use href='/feather-sprite.svg#heart' />
			</svg>
		</div>
	);
};

export default Heart;
