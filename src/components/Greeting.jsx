import { useState, useEffect } from 'react';

const greetings = [
	`Hi`,
	`Hola`,
	`안녕하세요`,
	`こんにちは`,
	`Здравствуйте`,
	`Привіт`,
	`Cześć`,
	`Bonjour`,
	`Ciao`,
	`Aloha`,
	`Hallo`,
	`Olá`,
	`Hej`,
	`Salut`,
	`שלום`,
	`سلام`,
	`Merhaba`,
	`Hei`,
	`你好`,
	`Hallå`,
	`Hoi`,
	`नमस्ते`,
	`こんにちは`,
	`สวัสดี`,
	`გამარჯობა`,
	`Përshëndetje`,
	`Բարև`,
	`ជំរាបសួរ`,
	`ສະບາຍດີ`,
	`مرحبا`,
	`ਸਤ ਸ੍ਰੀ ਅਕਾਲ`,
	`வணக்கம்`,
	`హలో`,
	`ಹಲೋ`,
	
];

const Greeting = () => {
	const [greetingIndex, setGreetingIndex] = useState(
		Math.floor(Math.random() * greetings.length)
	);

	const changeGreeting = () => {
		let randomNumber = Math.floor(Math.random() * greetings.length);
		setGreetingIndex(randomNumber);
	};

	useEffect(() => changeGreeting(), []);

	return <>{greetings[greetingIndex]}</>;
};

export default Greeting;
