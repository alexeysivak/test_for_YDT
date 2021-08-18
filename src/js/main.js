import { initBurgerListener, initLangSelectorListener, initWindowWidthListener } from './handlers.js';

initBurgerListener();
initLangSelectorListener();
initWindowWidthListener();

function changeLanguage(chosenLang) {
	console.log(chosenLang);
}

function initSlider() {
	const $slider = $('#slider');
	$slider.append(getSliderTemplate());

	$slider.slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
}

function getSliderTemplate() {
	return `<img src="./images/slider_illustrations/il.png" alt="image" />
			<img src="./images/slider_illustrations/il.png" alt="image" />
			<img src="./images/slider_illustrations/il.png" alt="image" />`;
}

export { changeLanguage, initSlider };
