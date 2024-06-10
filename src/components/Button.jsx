import ChevronsRight from './Icons/ChevronsRight';

const Button = ({ children }) => {
	return (
		<button
			id='outline-btn'
			type='submit'
			className='group'
		>
			{children}
			<span className='group-hover:text-emerald-400 dark:group-hover:text-teal-200 group-hover:ml-1 duration-300'>
				<ChevronsRight
					size={15}
					className='ml-2'
				/>
			</span>
		</button>
	);
};

export default Button;
