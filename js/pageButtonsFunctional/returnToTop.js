(function () {

	var toTopButton = document.querySelector(".to-top-button");

	if (toTopButton) {
		function returnToTop(e) {
			window.scrollTo(0, 0);
		}

		toTopButton.addEventListener('click', returnToTop);
	}

}());
