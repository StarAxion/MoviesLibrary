(function () {

	var genreButton = document.querySelectorAll(".genre-menu__button");

	if (genreButton) {
		function filterMoviesByGenre(e) {
			window.moviesListService.filterMoviesByGenre(e.target.textContent.toLowerCase(), window.moviesListView.renderMoviesList);
		}

		for (var i = 0; i < genreButton.length; i++) {
			genreButton[i].addEventListener('click', filterMoviesByGenre);
		}
	}

}());
