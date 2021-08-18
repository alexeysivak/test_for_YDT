import { hideElement, showElement, toggleElementVisibility } from './commonView.js';
import { changeLanguage, initSlider } from './main.js';

const openBurgerBtn = document.getElementById('openBurgerBtn');
const closeBurgerBtn = document.getElementById('closeBurgerBtn');
const mobileNavMenu = document.getElementById('mobileNavMenu');

function initBurgerListener() {
	openBurgerBtn.addEventListener('click', () => showElement(mobileNavMenu));
	closeBurgerBtn.addEventListener('click', () => hideElement(mobileNavMenu));
}

const languageSelectorBtn = document.getElementById('languageSelectorBtn');
const languageSelecor = document.getElementById('languageSelecor');

function initLangSelectorListener() {
	languageSelecor.addEventListener('click', (e) => {
		const target = e.target;
		console.log(e.target);
		switch (true) {
			case target === languageSelectorBtn:
				toggleElementVisibility(languageSelecor);
				break;
			case target.parentElement === languageSelectorBtn:
				toggleElementVisibility(languageSelecor);
				break;
			case target.classList.contains('header__selector-button'):
				changeLanguage(target.dataset.lang);
				hideElement(languageSelecor);
				break;
		}
	});
}

function initWindowWidthListener() {
	if (window.innerWidth >= 768) {
		initSlider();
	}
	window.addEventListener('resize', checkSliderRequirements);
}

function checkSliderRequirements() {
	const slider = document.getElementById('slider');
	if (window.innerWidth >= 768 && !slider.children[0]) {
		initSlider();
		window.removeEventListener('resize', checkSliderRequirements);
	}
}

export { initBurgerListener, initLangSelectorListener, initWindowWidthListener };
