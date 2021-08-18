import { hideElement, showElement, toggleElementVisibility } from './commonView.js';
import { changeLanguage } from './main.js';

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
		e.stopPropagation();
		const target = e.target;
		switch (true) {
			case target === languageSelectorBtn:
				toggleElementVisibility(languageSelecor);
				break;
			case target.classList.contains('header__selector-button'):
				changeLanguage(target.dataset.lang);
				hideElement(languageSelecor);
		}
	});
}

export { initBurgerListener, initLangSelectorListener };
