const HyperLink = ({ children }) => {
	return (
		<span className='relative before:absolute text-black dark:text-white before:bg-emerald-200 dark:before:bg-indigo-500 before:bottom-0 before:left-0 before:w-full before:h-full before:origin-bottom before:scale-y-[0.45] hover:before:scale-y-100 hover:bg-transparent before:transition-transform before:ease-in before:duration-300 cursor-pointer z-0'>
			{children}
		</span>
	);
};

export default HyperLink;
