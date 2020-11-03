(function () {

	var allMoviesButton = document.querySelector(".all-movies-button");

	if (allMoviesButton) {
		function showAllMovies(e) {
			window.moviesListService.getMoviesList(window.moviesListView.renderMoviesList);
		}

		allMoviesButton.addEventListener('click', showAllMovies);
	}

}());
