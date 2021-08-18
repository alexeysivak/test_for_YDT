function hideElement(element) {
	element.classList.add('hidden');
}

function showElement(element) {
	element.classList.remove('hidden');
}

function toggleElementVisibility(element) {
	element.classList.toggle('hidden');
}

export { hideElement, showElement, toggleElementVisibility };
