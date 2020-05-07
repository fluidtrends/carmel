export function isAnyPartOfElementInViewport(el) {
	if(!el) return false

	const rect = el.getBoundingClientRect();
	// DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
	const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

	
	const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
	const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

	return (vertInView && horInView);

}

export function isElementInViewport(el) {
	if(!el) return false

  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)
  );
}
