import { initBurgerListener, initLangSelectorListener } from './handlers.js';

initBurgerListener();
initLangSelectorListener();

export function changeLanguage(chosenLang) {
	console.log(chosenLang);
}
