import { mainSlide } from "./modules/main-slide.js";
mainSlide();
import { handleScrollContent } from "./assets/handleScrollContent.js";
handleScrollContent();
import { fadeInSlideContent } from "./assets/fadeInSlideContent.js";
fadeInSlideContent();
import { audio } from './assets/audio-player.js';
audio();
// -----------------------------------------------------------------------------
import { animationSvg } from "./chuks/animationSvg.js";
animationSvg();
// -----------------------------------------------------------------------------
import swiperLayout from './assets/swiper-layout.js';
import { servicesSlide } from "./modules/services-slide.js";

import isMobile from "./assets/Js-devise.js";
const initSwiper = document.querySelector('.content-box__body');
if (isMobile.any()) {
	console.log('mobyle');
	initSwiper.classList.add('_swiper');
	swiperLayout();
	servicesSlide();
} else {
	console.log('no mobyle');
} 