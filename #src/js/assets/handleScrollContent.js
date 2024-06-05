export function handleScrollContent() {
	const handleScroll = () => {
		const header = document.querySelector('.header');
		const mainContent = document.querySelector('.page__main-content');
		const mainContentTop = mainContent.getBoundingClientRect().top;

		if (mainContentTop < 0) {
			header.classList.add('with-border');
			// fadeIn.classList.add('with-border');
		} else {
			header.classList.add('without-border');
			header.classList.remove('with-border');
			// fadeIn.classList.remove('with-border');
		}
		if (mainContentTop < 0) {
			header.classList.remove('without-border');
		}
	};
	window.addEventListener('scroll', handleScroll);
	// Очистка слушателя событий при размонтировании компонента
	return () => {
		window.removeEventListener('scroll', handleScroll);
	};
}