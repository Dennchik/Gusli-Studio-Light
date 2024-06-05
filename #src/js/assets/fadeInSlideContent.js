import { fadeInSlide } from '../modules/anime-js.js';
export function fadeInSlideContent() {
	const slideWrappers = document.querySelectorAll('.main-slide__slide-wrapper');
	if (!slideWrappers.length) return; // Проверка, что слайд-контейнеры существуют

	// Проверяем активен ли первый слайд при загрузке страницы
	const firstSlideWrapper = slideWrappers[0];
	const isActive = firstSlideWrapper.classList.contains('swiper-slide-active');
	if (isActive) {
		// Если первый слайд активен, запускаем анимацию
		fadeInSlide();
	}

	// Начинаем отслеживать изменения в слайд-контейнерах
	slideWrappers.forEach((slideWrapper) => {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
					const isActive = slideWrapper.classList.contains('swiper-slide-active');
					if (isActive) {
						// Если слайд-контейнер содержит класс 'swiper-slide-active', запускаем анимацию
						fadeInSlide();
					}
				}
			});
		});

		observer.observe(slideWrapper, { attributes: true });
		// Отключение наблюдателя при размонтировании компонента
		return () => {
			observer.disconnect();
		};
	});
};