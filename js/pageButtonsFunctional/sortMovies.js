(function () {

	var titleSort = document.querySelector(".title-sort");

	if (titleSort) {
		function sortByTitle(e) {
			window.moviesListService.sortByTitle(window.moviesListView.renderMoviesList);
		}

		titleSort.addEventListener('click', sortByTitle);
	}


	var titleSortReversed = document.querySelector(".title-sort-reversed");

	if (titleSortReversed) {
		function sortByTitleReversed(e) {
			window.moviesListService.sortByTitleReversed(window.moviesListView.renderMoviesList);
		}

		titleSortReversed.addEventListener('click', sortByTitleReversed);
	}



	var ratingSort = document.querySelector(".rating-sort");

	if (ratingSort) {
		function sortByRating(e) {
			window.moviesListService.sortByRating(window.moviesListView.renderMoviesList);
		}

		ratingSort.addEventListener('click', sortByRating);
	}


	var ratingSortReversed = document.querySelector(".rating-sort-reversed");

	if (ratingSortReversed) {
		function sortByRatingReversed(e) {
			window.moviesListService.sortByRatingReversed(window.moviesListView.renderMoviesList);
		}

		ratingSortReversed.addEventListener('click', sortByRatingReversed);
	}



	var releaseDateSort = document.querySelector(".release-date-sort");

	if (releaseDateSort) {
		function sortByReleaseDate(e) {
			window.moviesListService.sortByReleaseDate(window.moviesListView.renderMoviesList);
		}

		releaseDateSort.addEventListener('click', sortByReleaseDate);
	}


	var releaseDateSortReversed = document.querySelector(".release-date-sort-reversed");

	if (releaseDateSortReversed) {
		function sortByReleaseDateReversed(e) {
			window.moviesListService.sortByReleaseDateReversed(window.moviesListView.renderMoviesList);
		}

		releaseDateSortReversed.addEventListener('click', sortByReleaseDateReversed);
	}

}());
