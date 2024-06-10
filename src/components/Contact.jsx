import { useState } from 'react';
import { motion } from 'framer-motion';

import { validateEmail, capitalizeFirstLetter } from '../utils/helpers';
import MapPin from './Icons/MapPin';
import AtSign from './Icons/AtSign';
import GitHub from './Icons/GitHub';
import Globe from './Icons/Globe';
import Button from './Button';

const Contact = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errorMessage, setErrorMessage] = useState('');
	const { name, email, message } = formState;
	const formId = import.meta.env.VITE_GETFORM_ID;
	const formUrl = 'https://getform.io/f/' + formId;

	// handles form validation
	function handleChange(e) {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			// error message for invalid email
			if (!isValid) {
				setErrorMessage('Your email is invalid.');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
			} else {
				setErrorMessage('');
			}
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
		<section
			id='contact'
			className='container'
		>
			<motion.h2
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.5 }}
				viewport={{ once: true }}
			>
				Contact
			</motion.h2>
			<motion.div
				className='max-w-screen-lg mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.75 }}
				viewport={{ once: true }}
			>
				<div>
					<p>
						Please feel free to reach out with any questions or opportunities,
						and I'll do my best to respond as soon as possible. I look forward
						to hearing from you!
					</p>

					<div className='max-w-[90%] w-full mx-auto py-8 grid grid-cols-2 gap-2 sm:gap-4'>
						<div className='inline-flex items-center'>
							<span className='text-emerald-400 dark:text-teal-200'>
								<MapPin />
							</span>
							&nbsp;Location
						</div>
						<div className='inline-flex justify-end items-center'>
							: Lake City, FL
						</div>
						<div className='inline-flex items-center'>
							<span className='text-emerald-400 dark:text-teal-200'>
								<AtSign />
							</span>
							&nbsp;E-mail
						</div>
						<div className='inline-flex justify-end items-center'>
							:&nbsp;
							<a
								href='mailto:arollainio@gmail.com'
								className='text-emerald-400 dark:text-teal-200 hover:text-slate-500 dark:hover:text-blue-400'
								aria-label='arollainio.com'
							>
								arollainio.com
							</a>
						</div>
						<div className='inline-flex items-center'>
							<span className='text-emerald-400 dark:text-teal-200'>
								<GitHub />
							</span>
							&nbsp;GitHub
						</div>
						<div className='inline-flex justify-end items-center'>
							:&nbsp;
							<a
								href='https://github.com/L-Lainio'
								target='_blank'
								className='text-emerald-400 dark:text-teal-200 hover:text-slate-500 dark:hover:text-blue-400'
								aria-label='GitHub: @L-Lainio'
							>
								@L-Lainio
							</a>
						</div>
						<div className='inline-flex items-center'>
							<span className='text-emerald-400 dark:text-teal-200'>
								<Globe />
							</span>
							&nbsp;Languages
						</div>
						<div className='inline-flex justify-end items-center'>
							: English, Korean
						</div>
					</div>
				</div>

				{/* CONTACT FORM */}
				<div>
					<form
						method='POST'
						action={formUrl}
						id='contact-form'
						className='flex flex-col justify-center max-w-[600px] mx-auto w-full'
					>
						<div class='w-full mx-auto'>
							<label for='name'>
								Name:
								<input
									type='text'
									id='name'
									name='name'
									aria-labelledby='name'
									defaultValue={name}
									onBlur={handleChange}
								/>
							</label>

							<label for='email'>
								E-mail:
								<input
									type='email'
									id='email'
									name='email'
									aria-labelledby='email'
									defaultValue={email}
									onBlur={handleChange}
								/>
							</label>

							<label for='message'>
								Message:
								<textarea
									name='message'
									id='message'
									aria-labelledby='message'
									defaultValue={message}
									onBlur={handleChange}
									rows='4'
								/>
							</label>

							{errorMessage && (
								<div>
									<p className='text-slate-500 dark:text-blue-400 font-["Source_Code_pro"] font-medium tracking-tight text-xs'>
										{errorMessage}
									</p>
								</div>
							)}
							<Button>Submit</Button>
						</div>
					</form>
				</div>
			</motion.div>
		</section>
	);
};

export default Contact;
