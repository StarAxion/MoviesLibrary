(function () {

	var searchForm = document.querySelector(".search-form");
	var searchField = document.querySelector(".search-form__input");

	if (searchForm && searchField) {
		function searchMovie(e) {
			e.preventDefault();
			window.moviesListService.searchMovie(searchField.value.toLowerCase(), window.moviesListView.renderMoviesList);
			searchField.value = "";
		}

		searchForm.addEventListener('submit', searchMovie);
	}

}());
