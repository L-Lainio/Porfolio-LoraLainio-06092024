const Menu = () => {
	return (
		<div>
			<svg
				width='24'
				height='24'
				fill='none'
				stroke='currentColor'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				className='hover:text-emerald-400 dark:hover:text-teal-200 transition-all ease-in duration-300 cursor-pointer'
			>
				<use href='/feather-sprite.svg#menu' />
			</svg>
		</div>
	);
};

export default Menu;
