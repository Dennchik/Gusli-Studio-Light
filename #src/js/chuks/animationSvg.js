import { animationSvgLine, animationSvgText } from '../modules/anime-js.js';


export function animationSvg() {
	let boxImages = document.querySelectorAll('.content-box__image');
	let reverseAnimations = {};

	boxImages.forEach(boxImage => {
		boxImage.addEventListener('mouseover', function (event) {
			const target = event.currentTarget;
			// Если анимация в обратном направлении еще не завершилась, прекращаем выполнение
			if (reverseAnimations[target]) return;

			animationSvgLine(target, false, () => {
				// Обработка завершения анимации линии (если нужно)
			});
			animationSvgText(target, false, () => {
				// Обработка завершения анимации текста (если нужно)
			});
		});

		boxImage.addEventListener('mouseleave', function (event) {
			const target = event.currentTarget;
			// Устанавливаем флаг, что анимация в обратном направлении запущена
			reverseAnimations[target] = true;

			setTimeout(() => {
				animationSvgLine(target, true, () => {
					// Обработка завершения обратной анимации линии
					reverseAnimations[target] = false;
					console.log('Line animation reversed and flag reset');
				});
				animationSvgText(target, true, () => {
					// Обработка завершения обратной анимации текста
					reverseAnimations[target] = false;
					console.log('Text animation reversed and flag reset');
				});
			}, 500);
		});
	});
}